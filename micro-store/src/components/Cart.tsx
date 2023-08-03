import useCartStore from '../hooks/useCartStore';

export default function Cart() {
  const [snapshot] = useCartStore();
  const { items } = snapshot;

  // const items = [{ id: 1, productId: 1, quantity: 1 }];
  return (
    <div>
      <h2>카트</h2>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              상품 # {item.productId}
              {' - '}
              수량: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>장바구나가 비었습니다.</p>
      )}
    </div>
  );
}
