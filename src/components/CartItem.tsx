import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartItem({ id, name, price, quantity, image }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b dark:border-gray-700">
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-semibold dark:text-white">{name}</h4>
        <p className="text-gray-600 dark:text-gray-300">${price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: Math.max(0, quantity - 1) } })}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded dark:text-gray-300"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center dark:text-gray-300">{quantity}</span>
          <button
            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: quantity + 1 } })}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded dark:text-gray-300"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}