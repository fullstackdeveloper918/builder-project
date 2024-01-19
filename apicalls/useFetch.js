"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFecth = (apiEndpoint) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [apiEndpoint]);

    return { products, loading };
};

export default useFecth;
