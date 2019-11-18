import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import SignUp from '.';

storiesOf('Containers/SignUp', module)
	.addDecorator((story) => <View style={{ flex: 1, justifyContent: 'center' }}>{story()}</View>)
	.add('initial', () => <SignUp />);
