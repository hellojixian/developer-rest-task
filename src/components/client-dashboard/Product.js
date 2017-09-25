import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class Product extends React.Component {
    handleProductClick() {
        console.log('clicked')
    }

    render(){
        return (
            <div className='product-container' onClick={this.handleProductClick}>
                <Grid fluid>
                    <Row>
                        <Col xs={3} >
                            <img height="60" width="60" className='product-barcode' src={'https://d30y9cdsu7xlg0.cloudfront.net/png/52715-200.png'} />
                        </Col>
                        <Col xs={6} >
                            <h5 className='product-name'>{this.props.product.name}</h5>
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
