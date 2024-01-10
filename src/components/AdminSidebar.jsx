import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const AdminSidebar = () => {
    const { logout } = useAuth({middleware: 'auth'});
    const location = useLocation();
    const pathname = location.pathname;

  return (
    <aside className='md:w-72 h-screen'>
        <div className='p-4'>
            <img 
                src="/img/logo.svg" 
                alt="Fresh Coffee"
                className='w-40' 
            />
        </div>
        <nav className='mt-10'>
            <Link 
                to="/admin" 
                className={(pathname === '/admin' ? 'bg-amber-400' : '') + ' flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer'}
            >
                <img 
                    src={"/img/buy-1.svg"} 
                    alt={'Pedidos'}
                    className='w-20'
                />
                <p className='text-lg truncate'>
                    {'Pedidos'}
                </p>
            </Link>
            <Link 
                to="/admin/products" 
                className={(pathname === '/admin/products' ? 'bg-amber-400' : '') +' flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer'}
            >
                <img 
                    src={"/img/bag-1.svg"} 
                    alt={'Productos'}
                    className='w-20'
                />
                <p className='text-lg truncate'>
                    {'Productos'}
                </p>
            </Link>
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