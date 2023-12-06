import React from 'react'
import useShop from '../hooks/useShop';
import ProductOverview from './ProductOverview';

const Overview = () => {
  const {order} = useShop();

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className='text-4xl font-semibold'>
        Mi pedido
      </h1>
      <p className='text-lg my-5'>
        Resumen de tu pedido
      </p>
      <div className='py-10'>
        {order.length === 0 ? (
          <p className='text-center text-2xl'>
            Todavía no has agregado nada a tu pedido
          </p>
        ) : (
          order.map((product) => {
            return <ProductOverview key={product.id} product={product} />
          })
        )}
      </div>
      <p className='text-xl mt-10'>
          Total: {''}
      </p>
      <form className='w-full'>
          <div className='mt-5'>
            <input 
              type="submit" 
              name="" 
              id=""
              className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded text-white text-center w-full cursor-pointer'
              value="Confirmar pedido"
            />
          </div>
      </form>
    </aside>
  )
}

export default Overview