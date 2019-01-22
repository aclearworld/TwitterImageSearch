import {actionTypes} from "../actions/actionTypes";

const Search = 'search';

export const buttonText = (state = Search, action) => {
    switch (action.type) {
        case actionTypes.WAIT:
            return 'Wait';
        case actionTypes.RECEIVE_URLS:
            return Search;
        default:
            return state;
    }
};