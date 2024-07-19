import React, { useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom'; // Assuming React Router v6 for navigation
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Custom validation function for password
  const validatePassword = (password) => {
    // Regex pattern to check if password contains both alphabets and numbers
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();

    const errors = {};
    if (!validator.isEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!validatePassword(password)) {
      errors.password = 'Password must contain both alphabets and numbers';
    }

    setErrors(errors);
    var body={
        usermail:email,
        userpassword:password
      }
    var ele=axios.post("http://localhost:5001/login",body, {
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        }
      });
    var val=ele.data.msg;
    if(val===1)
    {
        alert("email alredy exists you can login now");
        navigate("/login");
    }
    else if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully');
      var res=axios.post("http://localhost:5001/login",body, {
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        }
      });
      if(res.data.msg===1){
      alert("Sucessfully signed up");
      navigate('/login'); // Redirect to sign-in page upon success
      }
      else
      alert("Fail to sign up could please try it again");
    }
  };

  return (
    <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-700">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-3 text-lg leading-tight text-gray-700 border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`w-full px-4 py-3 mb-3 text-lg leading-tight text-gray-700 border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="mb-6 text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-pink-500 rounded-full hover:bg-violet-700 focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;