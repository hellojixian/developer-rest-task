import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Modal from '../common/Modal';
import LoadingButton from '../common/LoadingButton';

const dialogStyle = {
    position: 'absolute',
    width: '50vw',
    minWidth: '600px',
    top: '10vh',
    left: '25vw',
    borderRadius: '5px',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
}

const whiteButtonStyle = {
    backgroundColor: 'white',
    margin: 0
}

const blueButtonStyle = {
    backgroundColor: '#6CC0E5',
    color: 'white'
}

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.handleProductClick = this.handleProductClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleProductClick() {
        this.setState({modalOpen: true});
    }

    closeModal() {
        this.setState({modalOpen: false});
    }

    render(){
        return (
            <div className='product-container' onClick={this.handleProductClick}>
                <Modal
                    showModal={this.state.modalOpen}
                    onHide={this.closeModal}
                >
                    <div style={dialogStyle} >
                        <Grid fluid>
                            <Row>
                                <Col xs={2}>
                                    <img height="60" width="60" className='product-barcode' src={'https://d30y9cdsu7xlg0.cloudfront.net/png/52715-200.png'} />
                                </Col>
                                <Col xs={9}>
                                    <h4 className='product-name brand-blue'>{this.props.product.name}</h4>
                                    <h5 className='product-short-desc'>{this.props.product.shortDesc}</h5>
                                    <h6 className='product-date'>Since {this.props.product.date}</h6>
                                </Col>
                                <Col xs={1}>
                                    <button onClick={this.closeModal}>x</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <img style={{marginTop: 20}} height="120" width="120" className='product-barcode' src={"http://via.placeholder.com/120x120"} />
                                </Col>
                                <Col xs={9}>
                                    <h4 className='brand-blue'>Summary</h4>
                                    <p>
                                        {this.props.product.summary}
                                    </p>
                                </Col>
                            </Row>
                            <h4 className='brand-blue'>Description</h4>
                            <p>{this.props.product.description}</p>
                            <hr />  
                            <Row>
                                <Col xs={3}>
                                    <button style={blueButtonStyle} className='btn blue-btn'><span className='glyphicon glyphicon-search'></span>  Discovery</button>
                                </Col>
                                <Col xs={6}>
                                    <button style={whiteButtonStyle} className='btn'><span className='glyphicon glyphicon-edit'></span>  Edit</button>
                                    <button style={whiteButtonStyle} className='btn'><span className='glyphicon glyphicon-trash'></span>  Delete</button>
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                </Modal>
                <Grid fluid>
                    <Row>
                        <Col xs={3} >
                            <img height="60" width="60" className='product-barcode' src={'https://d30y9cdsu7xlg0.cloudfront.net/png/52715-200.png'} />
                        </Col>
                        <Col xs={6} >
                            <h5 className='product-name brand-blue'>{this.props.product.name}</h5>
                            <h6 className='product-short-desc'>{this.props.product.shortDesc}</h6>
                            <h6 className='product-date'>Since {this.props.product.date}</h6>
                        </Col>
                        <Col xs={2}>
                           <img style={{marginTop: '20px'}} height="40" width="40" className='product-barcode' src={'http://www.myiconfinder.com/uploads/iconsets/256-256-042663fcf25e4dfa31c246813829b3d5.png'} />
                        </Col>
                        <Col xs={1}>
                            <img style={{marginTop: '30px'}} height="20" width="10" src='https://image.flaticon.com/icons/png/128/32/32213.png' />
                        </Col>
                    </Row>
                </Grid>
                <hr className='product-divider'/>
            </div>
        )
    }
};



export default connect()(Product);
