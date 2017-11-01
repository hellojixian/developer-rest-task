import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductItem from './Product_item';
import { fetchJSON } from '../../actions/index';
import _ from 'lodash';
import ProductCategory from './Product_category';

class Products extends React.Component {
    componentDidMount() {
        this.props.fetchJSON();
    }

    renderList() {
        return _.map(this.props.lists, item => {
            return (
                <ProductCategory key={item.category} data={item}>
                </ProductCategory>
                );
        });
    }

    render(){
        return (
            <div><h1>Products</h1>
            <div>{this.renderList()}</div>
            </div>

        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };

// Products = connect()(Products);

function mapStateToProps(state) {
    return { lists : state.project_list};
}

export default connect(mapStateToProps, { fetchJSON })(Products);
