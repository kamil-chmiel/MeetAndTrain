import React from 'react';
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native';

import AvatarPicker from '.';

storiesOf('Components/AvatarPicker', module)
.addDecorator(story => <View style={{ flex: 1, justifyContent: 'center' }}>{story()}</View>)
.add('initial', () => <AvatarPicker />)
