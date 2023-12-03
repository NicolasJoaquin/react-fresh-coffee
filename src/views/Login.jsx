import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h1 className='text-4xl'>Inciar Sesión</h1>
      <p>Iniciá sesión para pedir en <span className='font-bold'>FreshCoffee</span></p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form action="">
          <div className='mb-4'>
            <label 
              htmlFor="email"
              className='text-slate-800'
            >
              Email
            </label>
            <input 
              type="email" 
              id='email'
              className='mt-2 w-full p-3 bg-gray-50'
              name='email'
              placeholder='nicolas.joaquin.diorio@gmail.com'
            />
          </div>

          <div className='mb-4'>
            <label 
              htmlFor="password"
              className='text-slate-800'
            >
              Password
            </label>
            <input 
              type="password" 
              id='password'
              className='mt-2 w-full p-3 bg-gray-50'
              name='password'
              placeholder='*********'
            />
          </div>

          <input 
            type="submit" 
            value="Iniciar sesión"
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded-md cursor-pointer' 
          />
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/register" className='hover:text-slate-700'>
          Registrate en <span className='font-bold'>FreshCoffee</span>
        </Link>
      </nav>
    </>
  )
}

export default Login