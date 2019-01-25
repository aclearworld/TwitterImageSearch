import {actionTypes} from "./actionTypes";
import twitterAPI from "../APIs/twitterAPI";

const startRequest = () => {
    return {
        type: actionTypes.WAIT,
    };
};

const receiveUrls = UrlSchemas => {
    return {
        type: actionTypes.RECEIVE_URLS,
        payload: {UrlSchemas: UrlSchemas}
    };
};

export const getUrls = title => {
    return dispatch => {
        dispatch(startRequest());
        twitterAPI(title)
            .then(res => {
                console.log(res);
                dispatch(receiveUrls(res.data.payloads));
            })
            .catch(err => {
                console.log('caught error', err.stack);
            })
    };
};