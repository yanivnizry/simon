import React, {Fragment, useEffect, useCallback, useRef} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ACTION_TYPES} from '../utils/constants';
import AskForName from '../components/AskForName';
import GameButton from '../components/Button';
import {FULL_COLORS} from '../utils/constants';

import {
  addToResults,
  resetSequence,
  turnOn,
  turnAllOff,
  startUserInput,
  addToSequence,
  start,
  play,
  finish,
  askName,
  resetUserInput,
} from '../redux/actions';
import {getOneRandomButton, sleep} from '../utils/sequence';
import {playSound} from '../utils/sound';
import Results from './Results';

const Board = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const sequence = useSelector((state) => state.sequence);
  const userInput = useSelector((state) => state.userInput);
  const results = useSelector((state) => state.results);
  const disabled = !(status === ACTION_TYPES.STATUS_FINISH);

  const playSequence = useCallback(async () => {
    await sleep(15);
    for (let i = 0; i < sequence.length; i++) {
      const colorName = sequence[i];
      dispatch(turnOn(colorName));
      playSound(`${FULL_COLORS[colorName]}.mp3`);
      await sleep(5);
      dispatch(turnAllOff());
      await sleep(5);
    }
    await sleep(15);

    dispatch(startUserInput());
  }, [dispatch, sequence]);

  let description = useRef(null);

  useEffect(() => {
    switch (status) {
      case ACTION_TYPES.STATUS_START:
        dispatch(resetSequence());
        dispatch(addToSequence(getOneRandomButton()));
        dispatch(play());
        description.current = 'Wait ...';
        break;
      case ACTION_TYPES.STATUS_USER_INPUT:
        if (userInput === sequence && userInput.length === sequence.length) {
          //success
          description.current = 'Wait ...';
          dispatch(resetUserInput());
          dispatch(addToSequence(getOneRandomButton()));
          dispatch(play());
        } else if (userInput !== sequence.slice(0, userInput.length)) {
          //failed
          console.log('failed');
          const sorted = results && results.sort((a, b) => b.score - a.score);
          const showAskForName =
            !sequence.length ||
            sequence.length - 1 > (sorted.length && sorted[0].score); //results empty or the max score is less than user's
          if (showAskForName) {
            dispatch(askName());
          } else {
            description.current = 'Failed ...';
            dispatch(finish());
          }
        }
        break;
      case ACTION_TYPES.STATUS_PLAY:
        playSequence();
        description.current = 'Your turn ...';

        break;
      default:
        break;
    }

    // console.log({status, sequence, userInput});
  }, [
    dispatch,
    status,
    sequence,
    userInput.length,
    userInput,
    playSequence,
    results,
  ]);

  const handleStartButton = () => {
    dispatch(start());
  };

  return (
    <Fragment>
      <View style={styles.game}>
        <AskForName
          visible={status && status === ACTION_TYPES.STATUS_ASK_NAME}
          onPress={(text) => {
            dispatch(addToResults({name: text, score: sequence.length - 1}));

            navigation.navigate('Results');

            dispatch(finish());
          }}
        />
        <View style={styles.row}>
          <GameButton color="green" position="topLeft" />
          <GameButton color="red" position="topRight" />
        </View>
        <View style={styles.row}>
          <GameButton color="blue" position="bottomLeft" />
          <GameButton color="yellow" position="bottomRight" />
        </View>
      </View>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        {'Current Score:' + sequence.length}
      </Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        {description.current}
      </Text>
      <View style={styles.button}>
        <Button title="start" onPress={handleStartButton} disabled={disabled} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  game: {
    marginTop: 50,
  },
  button: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Board;
