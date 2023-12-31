import React from 'react'
import useSWR from 'swr'
import useShop from '../hooks/useShop';
import { useState } from 'react';
import axiosClient from '../utils/axios' 
import { formatPrice } from '../helpers';

const Orders = () => {
    const [completingOrder, setCompletingOrder] = useState(false); 
    
    const { handleClickCompleteOrder } = useShop();
    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => axiosClient('/api/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // const { data, error, isLoading } = useSWR('/api/orders', fetcher);
    const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 15000}); // Para que le pegue a la API cada 15 seg.

    console.log(data);
    console.log(error);
    console.log(isLoading);

    if(isLoading) return 'Spinner...';

    return (
        <div>
            <h1 className='text-4xl font-semibold'>Pedidos</h1>
            <p className='text-2xl my-10'>Desde acá podés administrar tus pedidos</p>
            <div className='gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {data.data.data.map(order => (
                    <div key={order.id} className='p-5 bg-white shadow space-y-2 border-b rounded'>
                        <p className='text-lg font-semibold text-slate-800 border-b-2 pb-3'>
                            Pedido #{order.id.toString().padStart(5, '0')}
                        </p>
                        <p className='text-lg font-semibold text-slate-800 pt-3'>
                            Ítems
                        </p>
                        {order.products.map(product => (
                            <div 
                                key={product.id}
                                className='border-b border-b-slate-200 last-of-type:border-none py-4'
                            >
                                <p className='text-sm font-semibold'>#{product.id.toString().padStart(5, '0')}</p>
                                <p>{product.name}</p>
                                <p>
                                    Cantidad:{' '}
                                    <span className='font-bold'>{product.pivot.quantity}</span>
                                </p>

                            </div>
                        ))}
                        <p className='text-lg font-bold text-slate-800 border-t-2 pt-3'>
                            Cliente:{' '}
                            <span className='font-normal'>{order.user.name}</span>
                        </p>
                        <p className='text-lg font-bold text-amber-600'>
                            Total:{' '}
                            <span className='font-normal'>{formatPrice(order.total)}</span>
                        </p>

                        <button 
                            type="button" 
                            name="" 
                            id=""
                            // className={`${!completingOrder ? 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer' : 'bg-indigo-100 cursor-not-allowed'} px-5 py-2 rounded text-white text-center w-full`}
                            className={`bg-indigo-600 hover:bg-indigo-800 cursor-pointer px-5 py-2 rounded text-white text-center w-full`}
                            onClick={() => {
                                handleClickCompleteOrder(order.id);
                                setCompletingOrder(true);
                            }}
                        >
                            {/* AGREGAR SPINNER */}
                            Finalizar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders