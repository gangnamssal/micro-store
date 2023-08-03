import { vi } from 'vitest';
import Item from '../models/Item';
import CartStore from './CartStore';

test('CartStore', () => {
  const cartStore = new CartStore();

  const handleChange = vi.fn();

  cartStore.addlistener(handleChange);

  cartStore.addItem({ productId: 1, quantity: 1 });

  expect(handleChange).toBeCalled();

  expect(cartStore.getSnapshot()).toEqual({
    items: [new Item({ id: 1, productId: 1, quantity: 1 })],
  });
});
