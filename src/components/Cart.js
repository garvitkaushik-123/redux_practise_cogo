import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decQuantity,
  incQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";
import { addToOrder } from "../store/orderSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleOrder(item) {
    console.log("handleOrder");
    dispatch(addToOrder(item));
    dispatch(clearCart());
  }

  return (
    <div className="p-4 border">
      <h2 className="mb-4 text-lg font-semibold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              <div>
                <span className="font-semibold">{item.title}</span> - $
                {item.price.toFixed(2)}
              </div>
              <div className="flex items-center justify-between">
                <button onClick={() => dispatch(decQuantity(item.id))}>
                  -
                </button>
                <span className="">Qty - {`${item.quantity}`}</span>
                <button onClick={() => dispatch(incQuantity(item.id))}>
                  +
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
          <li className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </li>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => {
              handleOrder(cartItems);
            }}
          >
            Order
          </button>
        </ul>
      )}
    </div>
  );
};

export default Cart;
