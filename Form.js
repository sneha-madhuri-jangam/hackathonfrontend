import React, { useContext, useState } from 'react';
import SignUp from './SignUp'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import {GlobalState} from './App'
import axios from 'axios';

const Form = () => {
    const navigate=useNavigate();
    const {login,setlogin} = useContext(GlobalState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    var body={
        'username':email,
        'userpassword':password
    }
    var v=await axios.post("http://localhost:5001/login",body, {
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        }
      });
    console.log(v);  
    var val=v.data.msg;
    console.log(val);
    if(val===1)
    {
        alert("success");
        setlogin(true);
        navigate("/");
    }else
    {
    alert("fail to login");
    setEmail("");
    setPassword("");
    }
  };
  const handleSignUpClick=()=>
  {
    navigate("/signup")
  }

  return (
    <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded shadow-md">
      <h1 className='bg-gradient-to-tr from-violet-500 to-pink-500 text-center text-5xl font-semibold text-white-700'>Welcome To LearnEasy</h1>
      <h2 className="text-3xl font-bold text-center text-gray-700">Sign In</h2>
      
      <form>
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
          onClick={handleSubmit}>
            Sign In
          </button>
        </div>
        <div className="text-center">
            <p>forgot pasword</p>
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              className="font-bold text-pink-500 hover:text-blue-700"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;