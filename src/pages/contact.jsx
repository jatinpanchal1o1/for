// src/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100">
            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                    <p className="mt-4 text-lg text-center text-gray-600">
                        We would love to hear from you! Please fill out the form below.
                    </p>
                    <div className="mt-10">
                        <form className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea required className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;