import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import Settings from '../Settings';

describe('Correctly view component of', () => {
  test('Settings component', () => {
    const { container } = render(<Settings />);

    expect(container).toMatchSnapshot();
  });
});
