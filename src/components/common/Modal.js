import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-overlays';
import PropTypes from 'prop-types';

const modalStyle = {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0
  };
  
const backdropStyle = {
    ...modalStyle,
    zIndex: 'auto',
    backgroundColor: '#000',
    opacity: 0.5
};

class ModalWrapper extends React.Component {
    
    render(){
        return (
            <Modal
                aria-labelledby='modal-label'
                style={modalStyle}
                backdropStyle={backdropStyle}
                show={this.props.showModal}
                onHide={this.props.onHide}
            >
                {this.props.children}
            </Modal>
        )
    }
};

// ModalWrapper.propTypes = {
//     showModal: PropTypes.bool.required,
//     onHide: PropTypes.func
// }

export default connect()(ModalWrapper);
