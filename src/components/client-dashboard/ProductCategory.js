import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class ProductCategory extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <h3>{this.props.category}</h3>
                {this.props.products.map((product) => {
                    return <Product key={product.id} product={product}/>
                })}
            </div>
        )
    }
};

// const select = (state) => {
//     return {
//         products: state.products.products,
//     }
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         ...bindActionCreators(ProductActions, dispatch)
//     }
// } 


export default connect()(ProductCategory);
