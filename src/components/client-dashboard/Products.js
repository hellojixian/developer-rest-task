import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import * as ProductActions from '../../actions/products/ProductActions'

class Products extends React.Component {
    componentDidMount() {
        // Get data and load into redux
        this.props.getProducts()
    }

    render(){
        return (
            <div>
                <h1>Products</h1>
                <hr/>
            </div>
        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...bindActionCreators(ProductActions, dispatch)
    }
} 

Products = connect(null, mapDispatchToProps)(Products);

export default Products;
