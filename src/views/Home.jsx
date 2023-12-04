import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'

const Home = () => {

  return (
    <>
      <h1 className='text-4xl font-semibold'>Home</h1>
      <p className='text-2xl my-10'>
        ¡Elegí y personalizá tu pedido!
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product} 
          />
        ))}
      </div>
    </>
  )
}

export default Home