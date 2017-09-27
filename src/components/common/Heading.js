import React from 'react'
import PropTypes from 'prop-types'

export default class Heading extends React.Component {
  render() {
    const { classValue, title, type } = this.props
    let heading
    switch (type) {
      case 'h1':
        heading = (<h1 className={classValue}>{title}</h1>)
        break;
      case 'h2':
        heading = (<h2 className={classValue}>{title}</h2>)
        break;
      case 'h3':
        heading = (<h3 className={classValue}>{title}</h3>)
        break;
      case 'h4':
        heading = (<h4 className={classValue}>{title}</h4>)
        break;
      case 'h5':
        heading = (<h5 className={classValue}>{title}</h5>)
        break;
      default:
        heading = (<h6 className={classValue}>{title}</h6>)
        break;
    }
    return (
      <span>{heading}</span>
    );
  }
}

Heading.propTypes = {
  classValue: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired
};
