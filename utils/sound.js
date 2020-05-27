export const playSound = mp3 => {
  // Import the react-native-sound module
  var Sound = require('react-native-sound');

  // Enable playback in silence mode
  Sound.setCategory('Playback');

  // Load the sound file 'sound.mp3' from the app bundle
  // See notes below about preloading sounds within initialization code below.
  var sound = new Sound(mp3, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        sound.getDuration() +
        'number of channels: ' +
        sound.getNumberOfChannels(),
    );

    // Play the sound with an onEnd callback
    sound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });

  sound.release();
};
