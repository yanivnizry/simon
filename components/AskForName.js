import React from 'react';
import {View} from 'react-native';
import Prompt from 'react-native-input-prompt';

export default function AskForName({onPress, visible}) {
  return (
    <View>
      <Prompt
        visible={visible}
        title="Enter Your Name:"
        placeholder="Your Name"
        onCancel={() => {}}
        onSubmit={onPress}
      />
    </View>
  );
}
