import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import GameButton from '../components/Button';

const Board = () => {
  return (
    <Fragment>
      <View style={styles.game}>
        <View style={styles.row}>
          <GameButton color="green" position="topLeft" />
          <GameButton color="red" position="topRight" />
        </View>
        <View style={styles.row}>
          <GameButton color="blue" position="bottomLeft" />
          <GameButton color="yellow" position="bottomRight" />
        </View>
      </View>
      <View style={styles.button}>
        <Button title="start" />
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
