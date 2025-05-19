import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Listitem from './Listitem';
import { clearitem } from './CartSlice';
import CartEmpty from './CartEmpty';

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearcart = () => {
    dispatch(clearitem());
  };

  return cartitems.length === 0 ? (
    <CartEmpty />
  ) : (
    <div className="p-2 m-2 w-8/12 mx-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <Listitem items={cartitems} showAddButton={false} />
          </div>

          <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between">
            <button
              onClick={clearcart}
              className="bg-red-800 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
