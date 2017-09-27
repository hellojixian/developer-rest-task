import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../common/LoadingIndicator';
import * as ProductActions from '../../actions/products/ProductActions';
import ProductCategory from './ProductCategory';
import TweenMax from 'gsap';
import $ from 'jquery';
import AnimationWrapper from '../common/AnimationWrapper'

class Products extends React.Component {
    componentDidMount() {
        // Get data and load into redux
        this.props.getProducts()
    }

    render(){
        const isLoading = this.props.isLoading;
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
                    return (
                        <AnimationWrapper
                            targetElements='.product-category'
                            key={idx} 
                        >
                            <ProductCategory 
                                category={category} 
                                products={products}
                            />
                        </AnimationWrapper>
                    )
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
