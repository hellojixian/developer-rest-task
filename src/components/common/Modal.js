import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-overlays';
import PropTypes from 'prop-types';
import AnimationWrapper from'./AnimationWrapper';

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
                <AnimationWrapper
                    targetElements={this.props.targetElements}
                >
                    {this.props.children} 
                </AnimationWrapper>
            </Modal>
        )
    }
};

// ModalWrapper.propTypes = {
//     showModal: PropTypes.bool.required,
//     onHide: PropTypes.func
// }

export default connect()(ModalWrapper);
