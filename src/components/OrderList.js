import { useDispatch, useSelector } from "react-redux";

function OrderList() {
  const orderItems = useSelector((state) => state.orderItems);

  return (
    <div>
      {orderItems.map((cartItems) => {
        const total = cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        return (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2">
                <div>
                  <span className="font-semibold">{item.title}</span> - $
                  {item.price.toFixed(2)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="">Qty - {`${item.quantity}`}</span>
                </div>
              </li>
            ))}
            <li className="mt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </li>
            <br></br>
            <br></br>
          </ul>
        );
      })}
    </div>
  );
}

export default OrderList;
