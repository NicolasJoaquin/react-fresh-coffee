import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const AdminSidebar = () => {
    const { logout } = useAuth({middleware: 'auth'});

  return (
    <aside className='md:w-72 h-screen'>
        <div className='p-4'>
            <img 
                src="/img/logo.svg" 
                alt="Fresh Coffee"
                className='w-40' 
            />
        </div>
        <nav className='flex flex-col p-4'>
            <Link to="/admin" className='font-semibold text-lg'>Pedidos</Link>
            <Link to="/admin/products" className='font-semibold text-lg'>Productos</Link>
        </nav>
        <div className='my-5 px-5'>
            <button
                type='button'
                className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600 rounded'
                onClick={() => logout()}
            >
                Cerrar sesión
            </button>
        </div>
    </aside>
  )
}

export default AdminSidebar