import React from 'react'
import useSWR from 'swr'
import axiosClient from '../utils/axios'
import Product from '../components/Product'

const Products = () => {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () => axiosClient('/api/products', {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }).then(data => data.data.data)

  const { data, error, isLoading } = useSWR('/api/products', fetcher, {refreshInterval: 10000}); // Para que le pegue a la API cada 10 seg.

  if(isLoading) return 'Spinner...';

  console.log(error)
  console.log(data)

  return (
    <div>
        <h1 className='text-4xl font-semibold'>Productos</h1>
        <p className='text-2xl my-10'>Desde acá podés administrar la disponibilidad de tus productos</p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {data.map(product => (
          <Product
            key={product.id}
            product={product} 
            outOfStockButton={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Products