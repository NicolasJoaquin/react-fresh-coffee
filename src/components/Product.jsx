import React from 'react'
import { formatPrice } from '../helpers';
import useShop from '../hooks/useShop';

const Product = ({product, addButton = false, outOfStockButton = false}) => {
    const {name, price, image, category_id, id} = product;
    const { handleClickModal, handleSetProduct, handleClickOutOfStock } = useShop();

    return (
        <div className='border p-3 shadow bg-white rounded-sm'>
            <img 
                src={"/img/" + image + ".jpg"} 
                alt={name}
                className='w-full rounded-sm' 
            />
            <div className='p-5'>
                <h3 className='text-2xl font-semibold'>
                    {name}
                </h3>
                <p className='mt-5 text-4xl text-amber-500'>
                    {formatPrice(price)}
                </p>
                {addButton && (
                    <button 
                        type='button'
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded'
                        onClick={() => {
                            handleClickModal();
                            handleSetProduct(product);
                        }}
                    >   
                        Agregar
                    </button>
                )} 
                {outOfStockButton && (
                    <button 
                        type='button'
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 rounded'
                        onClick={() => {
                            handleClickOutOfStock(id)
                        }}
                    >   
                        Producto agotado
                    </button>
                )}
            </div>
        </div>
    )
}

export default Product