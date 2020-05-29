import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {playSound} from '../utils/sound';
import {useSelector, useDispatch} from 'react-redux';
import {ACTION_TYPES, LIGHT_COLORS} from '../utils/constants';
import {addToUserInput} from '../redux/actions';

const Button = ({color, position}) => {
  const status = useSelector(state => state.status);
  const turnOn = useSelector(state => state.turnOn);
  const disabled = !(status === ACTION_TYPES.STATUS_USER_INPUT);
  const dispatch = useDispatch();

  let combinedStyles,
    active = false;

  if (turnOn === color[0]) {
    active = true;
  }

  const handleTouch = () => {
    playSound(`${color}.mp3`);
    dispatch(addToUserInput(color[0]));
  };

  switch (position) {
    case 'topRight':
      combinedStyles = StyleSheet.flatten([styles.root, styles.topRight]);
      break;
    case 'topLeft':
      combinedStyles = StyleSheet.flatten([styles.root, styles.topLeft]);
      break;
    case 'bottomRight':
      combinedStyles = StyleSheet.flatten([styles.root, styles.bottomRight]);
      break;
    case 'bottomLeft':
      combinedStyles = StyleSheet.flatten([styles.root, styles.bottomLeft]);
      break;
  }
  return (
    <TouchableHighlight
      onPress={handleTouch}
      style={combinedStyles}
      disabled={disabled}>
      <View
        style={combinedStyles}
        backgroundColor={active ? LIGHT_COLORS[color[0]] : color}
      />
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    width: 180,
    height: 180,
  },
  active: {
    backgroundColor: 'white',
  },
  topLeft: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 320,
    borderTopRightRadius: 20,
    marginRight: 10,
  },
  topRight: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 320,
  },
  bottomRight: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 320,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
  },
  bottomLeft: {
    borderBottomLeftRadius: 320,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 10,
  },
});
