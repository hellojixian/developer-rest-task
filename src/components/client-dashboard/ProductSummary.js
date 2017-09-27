import React from 'react'
import PropTypes from 'prop-types';
import Heading from '../common/Heading'
import ImgContainer from '../common/ImgContainer'

const ProductSummary = props => (
  <div className="body_row">
    <span className="left_img"><ImgContainer logo_url={props.company_url} /></span>
    <span className="rt_description">
      <Heading classValue="body_title" title={'Summary'} type={'h5'} />
      <p className="body_txt">{props.description}</p>
    </span>
  </div>
)

ProductSummary.propTypes = {
  description: PropTypes.string,
  company_url: PropTypes.string
};

export default ProductSummary
