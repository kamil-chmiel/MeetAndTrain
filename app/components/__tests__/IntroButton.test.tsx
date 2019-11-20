import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import IntroButton from '../IntroButton'

const defaultProps = {
    color: "green",
}

it('should render correctly', () => {
    const tree = renderer.create(<IntroButton {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('should render correctly with white theme', () => {
    const tree = renderer.create(<IntroButton color="white" />).toJSON()
    expect(tree).toMatchSnapshot()
})