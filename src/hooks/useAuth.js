import axiosClient from "../utils/axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuth = ({middleware, url}) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();
    const { data: user, error, mutate } = useSWR('/api/user', () => 
        axiosClient('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors);
        })
    );

    const register = async (data, setErrors) => {
        try {
            const response = await axiosClient.post('/api/register', data);
            console.log(response.data);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
            await mutate();
          } catch (error) {
            // console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
          }      
    }    
    const login = async (data, setErrors) => {
        try {
            const response = await axiosClient.post('/api/login', data);
            console.log(response.data);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            // console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
        }      
    }  
    const logout = async () => {
        try {
            await axiosClient.post('/api/logout', null, {
            // await axiosClient.post('/api/test', {email: 'nicolas.joaquin.diorio@gmail.com', password: 'password1.'}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }    
            });
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }  

    // console.log(user);
    // console.log(error);

    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            navigate(url);
        }
        if(middleware === 'auth' && error) {
            navigate('/auth/login');
        }
    }, [user, error]);
    
    return {
        register,
        login,
        logout,
        user,
        error,
    }    
}
