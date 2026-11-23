// src/Login.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderCom from '../../component/random/loaderCom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isError, setError] = useState('');
   const [isloader, setLoader] = useState();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // Update the specific field
    }));
  };

   useEffect(() => {
        if (isError !== '') {
          const timer = setTimeout(() => {
            setError('');
          }, 1000); // 1000 milliseconds = 1 seconds
    
          return () => {
            clearTimeout(timer)}; // Cleanup the timer on unmount
        }
  
      }, []);


      const fetchData = async() => {
        try {
          if (!passwordMatch) {
            setError('Passwords do not match');
            return;
          }else{
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log('Signup successful:', response.data);
            setError(JSON.stringify(response.data));
            // Handle successful signup (e.g., redirect or show a message)
          }
        } catch (error) {
          console.error('Signup error:', error.response.data);
          setError(JSON.stringify(response.data));
          // Handle error (e.g., show an error message)
        }
      }
  
      const handleSubmit = e => {
        e.preventDefault();
        setLoader(true);
        fetchData();
      };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoader(true);
  //   fetchData(); 
  //   // try {
  //   //   const response = await axios.post('http://localhost:5000/api/auth/login', formData);
  //   //   console.log('Login successful:', response.data);
  //   //   // Handle successful login (e.g., redirect or store token)
  //   // } catch (error) {
  //   //   console.error('Login error:', error.response.data);
  //   //   setError(response.data);
  //   //   // Handle error (e.g., show an error message)
  //   // }
  // };

  useEffect(() => {
    // setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000); // Simulate a 1-second loading time
    return () => clearTimeout(timer) // Cleanup the timer on unmount
  }, [fetchData]);
    return (
        <div className="flex items-center justify-center min-h-screen bg-stone-950 overflow-y-auto">
            <div className="bg-white p-8 rounded-lg shadow-md shadow-stone-50 w-full max-w-sm">
            {isloader ? (
        <LoaderCom />
      ) : (
              <div>
                <h2 className="text-2xl font-bold text-center text-stone-950 mb-6 flex flex-col ">Login<p className='text-sm'>Don't have an account? <a href="/signup" className="text-sm text-blue-600 hover:underline">Sign Up</a></p></h2>
                <p className="text-sm text-red-500 font-light text-center">{isError}</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4">
                    <a href="/forgetpassword" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Login;