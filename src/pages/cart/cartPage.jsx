// src/Cart.js
import React from 'react';

const CartPage = () => {
    const cartItems = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
        { id: 3, name: 'Product 3', price: 39.99, quantity: 1 },
    ];

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left">Product</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Quantity</th>
                            <th className="py-3 px-4 text-left">Total</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="border-b">
                                <td className="py-3 px-4">{item.name}</td>
                                <td className="py-3 px-4">${item.price.toFixed(2)}</td>
                                <td className="py-3 px-4">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        className="border rounded-md w-16 text-center"
                                    />
                                </td>
                                <td className="py-3 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                                <td className="py-3 px-4">
                                    <button className="text-red-600 hover:text-red-800">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;