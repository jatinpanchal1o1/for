// src/Signup.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderCom from '../../component/random/loaderCom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
     const navigateTo = useNavigate();
    const [isError, setError] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isloader, setLoader] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      cpassword: ''
    });
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value, // Update the specific field
      }));
      // setError(''); // Clear error message on input change

      // Check password strength
      if (id === 'password') {
        checkPasswordStrength(value);
      }
    };


    useEffect(() => {
      if (formData.password && formData.cpassword) {
        setPasswordMatch(formData.password === formData.cpassword);
      } else {
        setPasswordMatch(true); // Reset if either field is empty
      }
      
      if (passwordStrength !== '') {
        const timer = setTimeout(() => {
          setPasswordStrength('');
        }, 1000); // 1000 milliseconds = 1 seconds
  
        return () => clearTimeout(timer); // Cleanup the timer on unmount
      }

      if (isError !== '') {
        const timer = setTimeout(() => {
          setError('');
        }, 2000); // 2000 milliseconds = 2 seconds
  
        return () => {
          clearTimeout(timer)}; // Cleanup the timer on unmount
      }

    }, [formData.password, formData.cpassword, passwordStrength, isError]);

    const checkPasswordStrength = (password) => {
      let strength = '';
      if (password.length < 6) {
        strength = 'Too short';
      } else if (!/[A-Z]/.test(password)) {
        strength = 'Add at least one uppercase letter';
      } else if (!/[0-9]/.test(password)) {
        strength = 'Add at least one number';
      } else if (!/[!@#$%^&*]/.test(password)) {
        strength = 'Add at least one special character';
      } else {
        strength = 'Strong password';
      }
      setPasswordStrength(strength);
    };

    const fetchData = async() => {
      try {
        if (!passwordMatch) {
          setError('Passwords do not match');
          return;
        }else{
          const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
          console.log('Signup successful:', response.data);
          
          // Handle successful signup (e.g., redirect or show a message)
        }
      } catch (error) {
        console.error('Signup error:', error.response.data);
        navigateTo("/login");
        // Handle error (e.g., show an error message)
      }
    }

    const handleSubmit = e => {
      e.preventDefault();
      setLoader(true);
      fetchData();
    };

    useEffect(() => {
      // setLoader(true);
      const timer = setTimeout(() => {
        setLoader(false);
      }, 1000); // Simulate a 1-second loading time
      return () => clearTimeout(timer) // Cleanup the timer on unmount
    }, [fetchData]);
    
  return (
    <div className="flex items-center justify-center min-h-screen  bg-stone-950 overflow-y-auto">
      <div className={`w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md shadow-stone-50 ${isloader ? 'cursor-wait' : 'cursor-default'}`}>
      {isloader ? (
        <LoaderCom />
      ) : (
        <div >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <p className="text-sm text-red-500 font-light text-center">{isError}</p>
        <p className="text-sm text-red-500 font-light text-center">{passwordStrength} </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 cursor-pointer rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
      )}
    </div>
    </div>
  );
};

export default Signup;