import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Sound from 'react-native-sound';
import {playSound} from '../utils/sound';

const Button = ({color, position}) => {
  let combinedStyles;
  const handleTouch = () => {
    console.log(color);
    playSound(`${color}.mp3`);
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
  console.log({combinedStyles});
  return (
    <TouchableHighlight onPress={handleTouch} style={combinedStyles}>
      <View style={combinedStyles} backgroundColor={color} />
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    width: 180,
    height: 180,
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
