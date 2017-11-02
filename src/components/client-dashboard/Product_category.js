import React, { Component } from 'react';
import ProductItem from './Product_item';

class ProductCategory extends Component {
    renderList() {
        return _.map(this.props.data.item, i => {
            return (
                <ProductItem key={i.time} content={i} />
                );
        });
    }
    render() {
        return (
            <div>
            <h2>{this.props.data.category}</h2>
            <hr/>
            <div>{this.renderList()}</div>
            </div>
            );
    }
}

export default ProductCategory;