import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../Settings';

it('Component is correct', () => {
  const component = renderer.create(<Settings />);
  expect(component.toJSON()).toMatchSnapshot();
});
