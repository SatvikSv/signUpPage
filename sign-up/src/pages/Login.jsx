import { useState } from 'react';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (!username || !password) {
    alert('Please fill in both fields.');
    return;
  }
  navigate('/home');
  console.log(username, password);
};

  return (
    <div className="flex bg-slate-200">
      <div className="flex bg-slate-200 w-1/2 h-screen flex-col justify-center items-center text-2xl">
        <h1>Facebook helps you connect and share with the people in your life.</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-screen bg-slate-200">
        <form onSubmit={handleFormSubmit} className="h-auto flex flex-col bg-white border rounded-lg p-12">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-30"
            placeholder="Email address or phone number"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-8 p-2"
            placeholder="Password"
          />
          <button type="submit" className="text-white font-bold bg-blue-600 m-1 p-1 border-blue-600 rounded-lg">
            Login
          </button>
          <button type="button" className="text-blue-500 font-thin text-sm m-1 p-1 border-b-2 pb-3">
            Forgotten Password?
          </button>
          <Link to="/createnewaccount" className="m-1 p-1 border-spacing-1 border-green-600 bg-green-600 rounded-lg mt-6 text-white font-bold flex justify-center items-center">
            Create new account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
