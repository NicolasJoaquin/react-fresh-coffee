import React from 'react'

const Category = ({category}) => {
    const {icon, id, name} = category;
    return (
        <div className='flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer'>
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