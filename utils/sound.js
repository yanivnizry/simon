import Sound from 'react-native-sound';

export const playSound = audioFilename => {
  Sound.setCategory('Playback');

  var sound = new Sound(audioFilename, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }

    // Play the sound with an onEnd callback
    sound.play(success => {
      if (!success) {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });

  sound.release();
};
