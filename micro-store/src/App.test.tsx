import { render } from '@testing-library/react';
import { Mock, describe, it, vi } from 'vitest';

import App from './App';
import useCartStore from './hooks/useCartStore';

vi.mock('./hooks/useCartStore');

describe('App', () => {
  it('is render', () => {
    (useCartStore as Mock).mockImplementation(() => [{ items: [] }, {}]);
    render(<App />);
  });
});
