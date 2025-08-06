import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center '> 
      <div className='border-2 rounded-xl border-emerald-600 p-10 w-full max-w-md'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 w-full'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 text-white font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 w-full'
            type='password'
            placeholder='Enter password'
          />
          <button
            type='submit'
            className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
