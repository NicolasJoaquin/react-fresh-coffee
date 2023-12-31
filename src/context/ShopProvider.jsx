import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
// import { categories as DBCategories } from '../data/categories'
// import axios from 'axios';
import axiosClient from '../utils/axios';

const ShopContext = createContext(null);

const ShopProvider = ({children}) => {
    const token = localStorage.getItem('AUTH_TOKEN');
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
            const { data } = await axiosClient('/api/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
    const handleSubmitNewOrder = async () => {
        try {
            const response = await axiosClient.post('/api/orders', {
                total: total,
                products: order,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }    
            });
            toast.success(response.data.message);
            setTimeout(() => {
                setOrder([]);
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }
    const handleClickCompleteOrder = async id => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            await axiosClient.put(`/api/orders/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }    
            });

        } catch (error) {
            console.log(error)
        }
    }
    const handleClickOutOfStock = async id => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            await axiosClient.put(`/api/products/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }    
            });

        } catch (error) {
            console.log(error)
        }
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
                handleSubmitNewOrder,
                total,
                handleClickCompleteOrder,
                handleClickOutOfStock,
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