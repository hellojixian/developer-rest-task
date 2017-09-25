import React from 'react';
import { connect } from 'react-redux';

class ProductCategory extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <h3>{this.props.category}</h3>
                {this.props.products.map((product) => {
                    return <h6>{product.name}</h6>
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
