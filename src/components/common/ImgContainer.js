import React from 'react'
import PropTypes from 'prop-types';

const ImgContainer = (props) => (
  <img className={props.className} src={props.logo_url} />
)

ImgContainer.propTypes = {
  className: PropTypes.string,
  logo_url: PropTypes.string.isRequired
}

export default ImgContainer
