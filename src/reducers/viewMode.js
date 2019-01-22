import {actionTypes} from "../actions/actionTypes";
import {VIEW_MODE_SEARCH} from "../Consts";

export const viewMode = (state = VIEW_MODE_SEARCH, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_VIEW_MODE:
            return action.payload.viewMode;
        default:
            return state;
    }
};