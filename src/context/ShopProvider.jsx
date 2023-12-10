import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
// import { categories as DBCategories } from '../data/categories'
// import axios from 'axios';
import axiosClient from '../utils/axios';

const ShopContext = createContext(null);

const ShopProvider = ({children}) => {
    // Hooks 
    // const [categories, setCategories] = useState(DBCategories); 
    const [categories, setCategories] = useState([]); 
    // const [currentCategory, setCurrentCategory] = useState(categories[0]); 
    const [currentCategory, setCurrentCategory] = useState({}); 
    const [modal, setModal] = useState(false); 
    const [product, setProduct] = useState({}); 
    const [order, setOrder] = useState([]); 
    const [total, setTotal] = useState(0); 
    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0);
        setTotal(newTotal);
    }, [order]);
    useEffect(() => {
        getCategories();
    }, []);

    // Funciones
    const getCategories = async () => {
        try {
            // console.log(import.meta.env.VITE_API_URL);
            const { data } = await axiosClient('/api/categories');
            setCategories(data.data);
            setCurrentCategory(data.data[0]);
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
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