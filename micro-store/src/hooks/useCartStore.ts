import { useSyncExternalStore } from 'react';

import CartStore, { CartStoreSnapshot } from '../stores/CartStore';

const cartStore = new CartStore();

export default function useCartStore(): [CartStoreSnapshot, CartStore] {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      cartStore.addlistener(onStoreChange);
      return () => cartStore.removelistener(onStoreChange);
    },
    () => cartStore.getSnapshot(),
  );
  return [snapshot, cartStore];
}
