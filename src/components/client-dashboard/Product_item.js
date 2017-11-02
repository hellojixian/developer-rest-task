import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJSON } from '../../actions/index';
import _ from 'lodash';


class ProductItem extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-sm-2 barcode">
                    <h1><span className="glyphicon glyphicon-barcode"></span></h1>
                </div>
                <div className="col-sm-8">
                    <p className="title">{this.props.content.title}</p>
                    <p>{this.props.content.location}</p>
                    <p className="loc">{this.props.content.time}</p>
                </div>
                <div className="col-sm-2">
                    <h1><span className="glyphicon glyphicon-list"></span></h1>
                </div>

            </div>
            <hr/>
            </div>


            );
    }
}

function mapStateToProps(state) {
    return { lists : state.project_list};
}

export default connect(mapStateToProps, { fetchJSON })(ProductItem);