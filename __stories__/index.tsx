import AsyncStorage from '@react-native-community/async-storage';
import { StyledStory } from '@react-pakistan/react-native-commons-collection';
import { theme } from '@react-pakistan/util-react-native-functions';
import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './story-loader';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

const Storybook = getStorybookUI({
  asyncStorage: AsyncStorage,
  host: 'localhost',
  onDeviceUI: true,
  port: 9002,
});

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export default () => (
  <StyledStory theme={theme}>
    <Storybook />
  </StyledStory>
);
