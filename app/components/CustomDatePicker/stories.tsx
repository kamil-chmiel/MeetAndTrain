import React from 'react';
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native';

import CustomDatePicker from '.';

storiesOf('Components/CustomDatePicker', module)
.addDecorator(story => <View style={{ flex: 1, justifyContent: 'center' }}>{story()}</View>)
.add('initial', () => <CustomDatePicker />)
