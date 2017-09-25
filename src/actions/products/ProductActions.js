/*
* export all functions for testing
*/

import api from '../../data/api.json'
import {
    LOADING_PRODUCTS,
    SET_PRODUCTS,
    SET_PRODUCT_CATEGORIES,
} from './const'

export function getProducts() {
    return (dispatch) => {
        dispatch(loadingProducts(true));
        getProductCategoriesFromApi(dispatch);
        getProductsFromApi(dispatch);
    }
}

function timeout(val, ms) {
    return new Promise(resolve => setTimeout(resolve(val), ms));
}

export async function getProductsFromApi(dispatch) {
    const products = await timeout(api.products, 1000)
    console.log(products)
    console.log(dispatch)
    dispatch(setProducts(products))
}

export async function getProductCategoriesFromApi(dispatch) {
    const categories = await timeout(api.productCategories, 1000)
    console.log(categories)
    console.log(dispatch)
    dispatch(setProductCategories(categories))
}

export function loadingProducts(state) {
    return {
        type: LOADING_PRODUCTS,
        state
    }
}

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export function setProductCategories(categories) {
    return {
        type: SET_PRODUCT_CATEGORIES,
        categories
    }
}