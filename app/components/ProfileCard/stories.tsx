import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import ProfileCard from '.';

storiesOf('Components/ProfileCard', module)
	.addDecorator((story) => <View style={{ flex: 1, justifyContent: 'center' }}>{story()}</View>)
	.add('initial', () => <ProfileCard />);
