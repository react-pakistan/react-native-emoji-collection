import React from 'react';
import renderer from 'react-test-renderer';
import { Emoji } from '../emoji';

describe('Testing Emoji component', () => {
  it('matches Emoji snapshot,', () => {
    const wrapper = renderer.create(
      <Emoji emoji="BlockchainColor1" />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
