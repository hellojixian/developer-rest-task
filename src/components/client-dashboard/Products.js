import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../common/LoadingIndicator';
import * as ProductActions from '../../actions/products/ProductActions';
import ProductCategory from './ProductCategory';

class Products extends React.Component {
    componentDidMount() {
        // Get data and load into redux
        this.props.getProducts()
        console.log(this.props.isLoading)
    }

    render(){
        const isLoading = this.props.isLoading;
        console.log('isLoading', isLoading)
        return (
            <div>
            <h1>Products</h1>
                <hr className='product-divider'/>
                {isLoading
                ? (<LoadingIndicator />)
                : this.props.categories.map((category, idx) => {
                    const products = this.props.products.filter(prod => {
                        return prod.category === category
                    })
                    return <ProductCategory 
                            key={idx} 
                            category={category} 
                            products={products}/>
                })}
            </div>
        )
    }
};

const select = (state) => {
    return {
        isLoading: state.products.isLoading,
        products: state.products.products,
        categories: state.products.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...bindActionCreators(ProductActions, dispatch)
    }
} 

Products = connect(select, mapDispatchToProps)(Products);

export default Products;
