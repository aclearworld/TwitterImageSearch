import {actionTypes} from "./actionTypes";
import twitterAPI from "../APIs/twitterAPI";

const startRequest = () => {
    return {
        type: actionTypes.WAIT,
    };
};

const receiveUrls = Urls => {
    return {
        type: actionTypes.RECEIVE_URLS,
        payload: {Urls: Urls}
    };
};

export const getUrls = title => {
    return dispatch => {
        dispatch(startRequest());
        twitterAPI(title)
            .catch(err => {
                console.log('caught error', err.stack)
            })
            .then(res => {
                const urls = res.statuses.map(status => {
                    // if (statuse.extended_entities && statuse.extended_entities.media[0]
                    //     && statuse.extended_entities.media[0].media_url) {
                    // }
                    return status.extended_entities.media[0].media_url;
                });
                console.log(urls);
                dispatch(receiveUrls(urls));
            })
    };
};