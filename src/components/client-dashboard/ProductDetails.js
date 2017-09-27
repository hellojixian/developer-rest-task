import React from 'react'
import PropTypes from 'prop-types';
import Heading from '../common/Heading'

const ProductDetails = props => (
  <span className="list_detail_col">
    <Heading type={props.type} classValue={props.classValue} title={props.title} />
    <p className="prod_descript">{props.prod_type}, {props.prod_sub_type}</p>
    <p className="date_tym">{props.date}</p>
  </span>
)

ProductDetails.propTypes = {
  type: PropTypes.string,
  prod_type: PropTypes.string,
  prod_sub_type: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

export default ProductDetails
