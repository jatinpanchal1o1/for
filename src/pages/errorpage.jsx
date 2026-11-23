// src/ErrorPage.js
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-stone-950">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.1)]">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-600">Oops! Page Not Found</h2>
                <p className="mt-2 text-gray-400">The page you are looking for does not exist.</p>
                <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-lg shadow-blue-500/50">
                    Go to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;