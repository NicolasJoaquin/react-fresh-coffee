import React, { createContext, useState } from 'react'
import { categories as DBCategories } from '../data/categories'

const ShopContext = createContext(null);

const ShopProvider = ({children}) => {
    // Hooks 
    const [categories, setCategories] = useState(DBCategories); 
    const [currentCategory, setCurrentCategory] = useState(categories[0]); 
    // const [categories, setCategories] = useState([]); 

    // Funciones
    const handleClickCategory = (id) => {
        const category = categories.filter(category => category.id == id)[0];
        setCurrentCategory(category);
    }
    
    return (
        <ShopContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export {
    ShopProvider
}
export default ShopContext