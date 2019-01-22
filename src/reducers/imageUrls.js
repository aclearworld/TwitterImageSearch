import {actionTypes} from "../actions/actionTypes";

const initialState = [];

export const imageUrls = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_URLS:
            return action.payload.Urls;
        default:
            return state;
    }
};