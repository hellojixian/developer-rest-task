import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {
    handleProductClick() {
        console.log('clicked')
    }

    render(){
        return (
            <div className='product-container' onClick={this.handleProductClick}>
                <h4>{this.props.product.name}</h4>
                <h5>{this.props.product.shortDesc}</h5>
                <h5>Since {this.props.product.date}</h5>
            </div>
        )
    }
};



export default connect()(Product);
