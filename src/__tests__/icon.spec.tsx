import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../icon';

describe('Testing Icon component', () => {
  it('matches Icon snapshot,', () => {
    const wrapper = renderer.create(
      <Icon icon="BlockchainColor1" />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
