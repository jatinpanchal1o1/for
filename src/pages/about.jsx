// src/About.js
import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100">
            {/* About Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">About Us</h2>
                    <p className="mt-4 text-lg text-center text-gray-600">
                        We are a team of passionate individuals dedicated to providing the best services to our clients.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                            <p className="mt-2 text-gray-600">
                                Our mission is to deliver high-quality products and services that exceed our clients' expectations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Our Vision</h3>
                            <p className="mt-2 text-gray-600">
                                We envision a world where technology and creativity come together to solve real-world problems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="mt-2 text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="mt-2 text-gray-600">CTO</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Alice Johnson</h3>
                            <p className="mt-2 text-gray-600">Marketing Manager</p>
                        </div>
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

export default About;