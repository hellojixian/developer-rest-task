import { CHANGE_FORM,SET_AUTH,SENDING_REQUEST,SET_ERROR_MESSAGE } from './../actions/const';

export default function auth(state = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload.products;
        default:
            return state;
    }
}