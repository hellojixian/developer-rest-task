/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import LoginActions from '../actions/account/LoginActions.js';
import axios from 'axios';


export function fetchJSON() {
    const request = axios.get("https://obscure-beyond-24069.herokuapp.com/apiforYC");

    // return (dispatch) => {
    //     request.then(({data}) => {
    //         dispatch({type: 'FETCH_JSON', payload: data})
    //     });
    // };
    return {
        type: "FETCH_POSTS",
        payload: request
    };
}

const actions = { LoginActions, fetchJSON };
module.exports = actions;


