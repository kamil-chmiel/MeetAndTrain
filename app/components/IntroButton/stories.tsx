import React from 'react';
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native';

import IntroButton from '.';

storiesOf('Components/IntroButton', module)
.addDecorator(story => <View style={{ flex: 1, justifyContent: 'center' }}>{story()}</View>)
.add('initial', () => <IntroButton />)
.add('with text', () => <IntroButton title='test'/>)
.add('with custom color', () => <IntroButton color='red'/>)
