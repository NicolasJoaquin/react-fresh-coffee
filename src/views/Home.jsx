import React from 'react'
import Product from '../components/Product'
import { products as data } from '../data/products'
import useShop from '../hooks/useShop'

const Home = () => {
  const { currentCategory } = useShop();
  const products = data.filter((product) => product.category_id == currentCategory.id);

  return (
    <>
      <h1 className='text-4xl font-semibold'>{currentCategory.name}</h1>
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