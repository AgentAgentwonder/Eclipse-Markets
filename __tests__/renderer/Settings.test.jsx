/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Settings from '../../renderer/src/pages/Settings.jsx';

jest.mock('../../secure-config.js', () => ({
  loadSecureConfig: jest.fn(() => ({ A: '1' })),
  saveSecureConfig: jest.fn()
}));

test('Settings page renders and rotate button works', async () => {
  render(<Settings />);
  expect(screen.getByText(/Settings/i)).toBeInTheDocument();
  const btn = screen.getByText(/Rotate Keys Now/i);
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  // after click, JSON of config should be present
  expect(screen.getByText(/"A": "1"/)).toBeInTheDocument();
});
