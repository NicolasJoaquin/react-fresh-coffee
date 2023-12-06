import React, { createContext, useState } from 'react'
import { categories as DBCategories } from '../data/categories'

const ShopContext = createContext(null);

const ShopProvider = ({children}) => {
    // Hooks 
    const [categories, setCategories] = useState(DBCategories); 
    const [currentCategory, setCurrentCategory] = useState(categories[0]); 
    const [modal, setModal] = useState(false); 
    const [product, setProduct] = useState({}); 
    const [order, setOrder] = useState([]); 

    // Funciones
    const handleClickCategory = (id) => {
        const category = categories.filter(category => category.id == id)[0];
        setCurrentCategory(category);
    }
    const handleClickModal = () => {
        setModal(!modal);
    }
    const handleSetProduct = (product) => {
        setProduct(product);
    }
    const addProductToOrder = (product) => {
        setOrder([...order, product]);
    }
    
    return (
        <ShopContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                addProductToOrder,
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