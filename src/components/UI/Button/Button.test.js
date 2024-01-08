import {render, screen} from '@testing-library/react';
import Button from './Button';

test('should show button', () => {
  render(<Button />)
  const button = screen.getByRole('button');
  console.log(button)
  expect(button).toBe('button')
  // Events and assertions...
})