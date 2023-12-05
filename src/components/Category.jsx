import React from 'react'
import useShop from '../hooks/useShop'

const Category = ({category}) => {
    const {icon, id, name} = category;
    const { currentCategory, handleClickCategory } = useShop();

    const categoryClass = (currentCategory.id == id) ? 
        'flex items-center gap-4 border w-full p-3 bg-amber-400 cursor-pointer' :
        'flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer'
    return (
        <div 
            className={categoryClass}
            onClick={() => handleClickCategory(id)}
        >
            <img 
                src={"/img/icono_" + icon + ".svg"} 
                alt={name}
                className='w-12'
            />
            <p className='text-lg truncate'>
                {name}
            </p>
        </div>
    )
}

export default Category