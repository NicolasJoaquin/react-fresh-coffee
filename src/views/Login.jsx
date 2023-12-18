import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const [errors, setErrors] = useState({});
  const { login } = useAuth({
    middleware: 'guest',
    url: '/',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    // console.log(data)
    login(data, setErrors);
  }

  return (
    <>
      <h1 className='text-4xl'>Inciar Sesión</h1>
      <p>Iniciá sesión para pedir en <span className='font-bold'>FreshCoffee</span></p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form 
          action=""
          onSubmit={(event) => handleSubmit(event)}
          noValidate
        >
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
            {errors.email?.length > 0 ? errors.email.map((error, i) => <Alert key={i} type='error'>{error}</Alert>)  : null}
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
            {errors.password?.length > 0 ? errors.password.map((error, i) => <Alert key={i} type='error'>{error}</Alert>)  : null}
          </div>

          {errors.others?.length > 0 ? errors.others.map((error, i) => <Alert key={i} type='error'>{error}</Alert>)  : null}

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