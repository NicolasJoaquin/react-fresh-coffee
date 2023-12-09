import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { categories as DBCategories } from '../data/categories'

const ShopContext = createContext(null);

const ShopProvider = ({children}) => {
    // Hooks 
    const [categories, setCategories] = useState(DBCategories); 
    const [currentCategory, setCurrentCategory] = useState(categories[0]); 
    const [modal, setModal] = useState(false); 
    const [product, setProduct] = useState({}); 
    const [order, setOrder] = useState([]); 
    const [total, setTotal] = useState(0); 
    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0);
        setTotal(newTotal);
    }, [order]);

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
        if(order.some(item => item.id === product.id)) {
            const newOrder = order.map(item => item.id === product.id ? product : item);
            setOrder(newOrder);
            toast.success('Guardado correctamente');
        }
        else {
            setOrder([...order, product]);
            toast.success('¡Agregado al pedido!');
        }
    }
    const handleEditQuantity = (id) => {
        const productToEdit = order.filter(product => product.id === id)[0];
        setProduct(productToEdit);
        setModal(!modal);
    }
    const handleDeleteProductFromOrder = (id) => {
        const newOrder = order.filter(product => product.id !== id);
        setOrder(newOrder);
        toast.success('¡Eliminaste un producto!');
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
                handleEditQuantity,
                handleDeleteProductFromOrder,
                total,
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