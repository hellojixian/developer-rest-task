/*
* export all functions for testing
*/

import api from '../../data/api.json'
import {
    LOADING_PRODUCTS
} from './const'

export function getProducts() {
    return (dispatch) => {
        dispatch(loadingProducts(true))
    }
}

export function loadingProducts(state) {
    return {
        type: LOADING_PRODUCTS,
        state
    }
}

export function getProductsFromApi() {
    setTimeout(()=>{
        return api.products;
    },1000);
}