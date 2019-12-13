import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import AvatarPicker from '../AvatarPicker'

it('should render correctly', () => {
    const tree = renderer.create(<AvatarPicker />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('should render correctly', () => {
    const tree = renderer.create(<AvatarPicker />).toJSON()
    expect(tree).toMatchSnapshot()
})