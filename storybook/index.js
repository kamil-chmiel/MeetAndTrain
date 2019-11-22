import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('../app/components/IntroButton/stories');
  require('../app/components/CustomTextInput/stories');
  require('../app/components/AvatarPicker/stories');
  require('../app/components/CustomDatePicker/stories');
  require('../app/components/DatePickerField/stories');
  require('../app/containers/Intro/stories');
  require('../app/containers/SignUp/stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('TrainingApp', () => StorybookUIRoot);

export default StorybookUIRoot;
