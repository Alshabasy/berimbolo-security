import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => dispatch({ type: 'TOGGLE_CART' })} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-2 dark:text-white">
            <ShoppingBag className="h-6 w-6" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
          </div>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded dark:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 flex flex-col h-[calc(100vh-180px)]">
          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Your cart is empty
              </div>
            ) : (
              state.items.map(item => (
                <CartItem key={item.id} {...item} />
              ))
            )}
          </div>

          <div className="border-t dark:border-gray-700 pt-4 mt-4">
            <div className="flex justify-between mb-4 dark:text-white">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={state.items.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}