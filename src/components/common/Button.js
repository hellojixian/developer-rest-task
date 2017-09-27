import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => (
  <button type="button" className="btn btn-default custom_btns" data-dismiss={props.property} >
      {props.children}<span>{props.name}</span>
  </button>
)

Button.propTypes = {
    property: PropTypes.string,
    name: PropTypes.string
};

export default Button
