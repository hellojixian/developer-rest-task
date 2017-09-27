import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './Product';
import Heading from '../common/Heading'
import ProductDetails from './ProductDetails'

class ProductList extends React.Component {
  render() {
    const { products } = this.props
    return (
      <div className="prodlist_inner">
        <Heading title={'Products'} type={'h1'} />
        {products.map((product, index) => {
          return (
            <div key={index}>
              <Product {...product} >
                <ProductDetails type={'h4'} {...product}/>
              </Product>
            </div>
          )
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  product: PropTypes.object
};

ProductList = connect()(ProductList);
export default ProductList;
