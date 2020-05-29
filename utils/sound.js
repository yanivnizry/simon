export const playSound = audioFilename => {
  // Import the react-native-sound module
  var Sound = require('react-native-sound');

  // Enable playback in silence mode
  Sound.setCategory('Playback');

  // Load the sound file 'sound.audioFilename' from the app bundle
  // See notes below about preloading sounds within initialization code below.
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
