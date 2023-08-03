import Cart from '../models/Cart';
import Item from '../models/Item';

export type CartStoreSnapshot = {
  items: Item[];
};

export default class CartStore {
  protected listeners = new Set<() => void>();
  private cart = new Cart();

  snapshot = {
    items: this.cart.items,
  };

  addlistener(listener: () => void) {
    this.listeners.add(listener);
  }

  removelistener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    this.cart = this.cart.addItem({ productId, quantity });

    this.update();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.cart.items,
    };
  }

  update() {
    // 상태를 저장하고
    this.takeSnapshot();
    // 변경을 알린다.
    this.publish();
  }
}
