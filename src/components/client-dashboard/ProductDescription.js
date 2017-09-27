import React from 'react'
import PropTypes from 'prop-types';
import Heading from '../common/Heading'

const ProductDescription = props => (
  <div className="body_row">
    <Heading classValue="body_title" title={'Description'} type={'h5'} />
    <p className="body_txt">{props.description}</p>
  </div>
)

ProductDescription.propTypes = {
  description: PropTypes.string
};

export default ProductDescription
