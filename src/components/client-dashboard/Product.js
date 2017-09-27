import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../common/Modal'
import ProductDescription from './ProductDescription'
import ProductSummary from './ProductSummary'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {id} = this.props
    const { isOpen } = this.state
    return (
      <ul className="cstm_product_list">
        <li>
          <a href="javascript:void(0)"  data-toggle="modal" data-target={'#prod_modal' + id }
           onClick={this.toggleModal}>
            <span className="img_col">
              <i className="fa fa-barcode" aria-hidden="true"></i>
            </span>
            {this.props.children}
            <span className="barcode_scanner">
              <span className="list_icon">
              <i className="fa fa-list-ul" aria-hidden="true"></i>
                <span className="value">4</span>
              </span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        {isOpen ? <Modal {...this.props} >
          <ProductSummary {...this.props} />
          <ProductDescription {...this.props} />
        </Modal> : null}
      </ul>
    )
  }
}


Product.propTypes = {
  id: PropTypes.number
}

export default Product
