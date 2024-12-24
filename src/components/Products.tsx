import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'Pro Security Camera',
    description: '4K Ultra HD with Night Vision',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400',
    category: 'cameras'
  },
  {
    id: 2,
    name: 'Smart Doorbell',
    description: 'WiFi-enabled with Two-way Audio',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400',
    category: 'doorbells'
  },
  {
    id: 3,
    name: 'Security System Hub',
    description: 'Central Control Unit',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400',
    category: 'systems'
  },
];

export default function Products() {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const { dispatch } = useCart();

  const filteredProducts = products.filter(product => {
    const categoryMatch = category === 'all' || product.category === category;
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'under200' && product.price < 200) ||
      (priceRange === '200to500' && product.price >= 200 && product.price <= 500) ||
      (priceRange === 'over500' && product.price > 500);
    
    return categoryMatch && priceMatch;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      },
    });
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Products</h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <select 
            className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="cameras">Cameras</option>
            <option value="doorbells">Doorbells</option>
            <option value="systems">Systems</option>
          </select>

          <select 
            className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="under200">Under $200</option>
            <option value="200to500">$200 - $500</option>
            <option value="over500">Over $500</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}