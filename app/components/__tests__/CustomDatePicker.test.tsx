import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import CustomDatePicker from '../CustomDatePicker';

describe('<DelegationInformation />', () => {
  const defaultProps = {
    isVisible: true,
    setVisible: jest.fn(),
    setChosenDate: jest.fn(),
  };

  const wrapper = renderer.create(<CustomDatePicker {...defaultProps} />);
  const wrapperInstance = wrapper.getInstance();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  describe('componentDidUpdate', () => {
    it('should set new value if value has changed', () => {
      wrapper.update(
        <CustomDatePicker {...defaultProps} value="test new value" />,
      );
      expect(wrapperInstance.state.initialValue).toEqual('new test value');
      expect(wrapperInstance.state.newValue).toEqual('new test value');
    });
  });
});
