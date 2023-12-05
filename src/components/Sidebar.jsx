import React from 'react'
import Category from './Category'
import useShop from '../hooks/useShop'

const Sidebar = () => {
    const { categories, currentCategory } = useShop();

    return (
    <aside className='md:w-72'>
        <div className='p-4'>
            <img 
                src="img/logo.svg" 
                alt="Fresh Coffee" 
                className='w-40'
            />
        </div>  
        <div className='mt-10'>
            { categories.map(category => (
                <Category 
                    key={category.id} 
                    category={category}
                />
            )) }
        </div>
        <div className='my-5 px-5'>
            <button
                type='button'
                className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600 rounded'
            >
                Cancelar pedido
            </button>
        </div>
    </aside>
  )
}

export default Sidebar