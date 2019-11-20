import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import CustomTextInput from '../CustomTextInput'

const defaultProps = {
    title: "testTitle",
}

it('should render correctly', () => {
    const tree = renderer.create(<CustomTextInput {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
})