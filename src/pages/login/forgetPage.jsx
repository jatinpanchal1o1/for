// src/ForgotPassword.js
import React from 'react';

const ForgotPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-stone-950">
            <div className="bg-white p-8 rounded-lg shadow-md shadow-stone-50 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                <p className="text-sm text-gray-600 text-center mb-4">
                    Enter your email address below and we will send you a link to reset your password.
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Send Reset Link
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/login" className="text-sm text-blue-600 hover:underline">Back to Login</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;