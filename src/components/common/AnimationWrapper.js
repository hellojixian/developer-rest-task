import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';
import $ from 'jquery';
class AnimationWrapper extends React.Component {
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        const elements = $(el).find(this.props.targetElements);
        elements.map((index,itemEl)=>{
            TweenMax.fromTo(itemEl, 0.5, {y:50, opacity: 0}, {y:0, opacity: 1, delay:0.2*index, ease:Power1.easeOut,onComplete: null});
        });
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
};

export default connect()(AnimationWrapper);
