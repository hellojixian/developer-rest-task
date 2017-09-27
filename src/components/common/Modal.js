import React from 'react'
import { connect } from 'react-redux'
import Button from '../common/Button'
import ProductDetails from '../client-dashboard/ProductDetails'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this._renderModalButton = this._renderModalButton.bind(this);
  }

  _renderModalButton() {
    return (
      <div className="pull-left">
        <Button name='Discovery' property={'modal'}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </Button>
        <Button name='Edit' property={'modal'}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </Button>
        <Button name='Delete' property={'modal'}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Button>
      </div>
    )
  }

  render() {
    return (
        <div className="modal fade" id={'prod_modal' + this.props.id} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <span className="img_col modal_icon">
                    <i className="fa fa-barcode" aria-hidden="true"></i>
                  </span>
                  <ProductDetails type={'h3'} classValue={'modal-title'} {...this.props} />
                </div>
                <div className="modal-body">
                  {this.props.children}
                </div>
                <div className="modal-footer">
                  {this._renderModalButton()}
                </div>
            </div>
          </div>
        </div>
      );
  }
}

Modal = connect()(Modal);
export default Modal;
