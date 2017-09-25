import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../common/LoadingIndicator';
import * as ProductActions from '../../actions/products/ProductActions';

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
                <hr/>
                {isLoading
                ? (<LoadingIndicator />)
                : this.props.products.map(product => {
                        return <h5>{product.name}</h5>
                })}
            </div>
        )
    }
};

const select = (state) => {
    return {
        isLoading: state.products.isLoading,
        products: state.products.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...bindActionCreators(ProductActions, dispatch)
    }
} 

Products = connect(select, mapDispatchToProps)(Products);

export default Products;
