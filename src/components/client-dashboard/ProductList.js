import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ModalData from './ModalData';

class ProductList extends React.Component {
	renderProductList() {
		let list = [
			{
				'productname': 'nnnnnn',
				'productdescriptionshort': 'dddddddddddd',
				// 'sincedate': new Date()
			},
			{
				'productname': 'n22222222',
				'productdescriptionshort': 'd2222222222222',
				// 'sincedate': new Date() + 1
			}
		]
		debugger
		return list.map((data) => {
			return(
				<li className='product-list-item'>
					<Grid>
						<Row>
							<Col md={1}><span className="glyphicon glyphicon-barcode"></span></Col>
		             		<Col md={2} className='product-list-item-middle'>
		            			<div className="product-name"><b>{data.productname}</b></div>
		               			<div className="description">{data.productdescriptionshort}</div>
		               			<div className="since-date">2011-0923</div>
		             		</Col>
		             	 	<Col md={1} >
		             	 		<span className="glyphicon glyphicon-list"></span>
		             	 		<span className="badge badge-notify">4</span>
		             	 		<span className="glyphicon glyphicon-chevron-right"></span>
		             	 	</Col>
		           		</Row>
		         	</Grid>
		        </li>
			)
		})
	}

	render(){
		return (
			<div >
				<ul>
					{this.renderProductList()}
				</ul>
				<ModalData
				 	closingmodal={this.props.closingmodal}
				 	data={this.props.modal.data}
				 	visible={this.props.modal.visiblevalue}
				 	handlingmodal = {this.props.handlingmodal}
				/>
			</div>
		);
	}
}

export default ProductList;