import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import Intro from '.';

storiesOf('Containers/Intro', module)
	.addDecorator((story) => <View style={{ flex: 1, justifyContent: 'center' }}>{story()}</View>)
	.add('initial', () => <Intro />);
