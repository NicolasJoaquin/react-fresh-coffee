import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../utils/axios';

const Register = () => {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    // console.log(data)
    try {
      const response = await axiosClient.post('/api/register', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className='text-4xl'>Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form 
          action=""
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className='mb-4'>
            <label 
              htmlFor="name"
              className='text-slate-800'
            >
              Nombre
            </label>
            <input 
              type="text" 
              id='name'
              className='mt-2 w-full p-3 bg-gray-50'
              name='name'
              placeholder='Nicolas Diorio'
              ref={nameRef}
            />
          </div>

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
              ref={emailRef}
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
              ref={passwordRef}
            />
          </div>

          <div className='mb-4'>
            <label 
              htmlFor="password_confirmation"
              className='text-slate-800'
            >
              Repetir Password
            </label>
            <input 
              type="password" 
              id='password_confirmation'
              className='mt-2 w-full p-3 bg-gray-50'
              name='password_confirmation'
              placeholder='*********'
              ref={passwordConfirmationRef}
            />
          </div>

          <input 
            type="submit" 
            value="Crear cuenta"
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded-md cursor-pointer' 
          />
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/login" className='hover:text-slate-700'>
          Iniciá sesión en <span className='font-bold'>FreshCoffee</span>
        </Link>
      </nav>
    </>
  )
}

export default Register