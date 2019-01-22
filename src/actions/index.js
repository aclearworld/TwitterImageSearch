import {actionTypes} from "./actionTypes";
import giphyApi from "../APIs/giphyAPI";

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
        giphyApi(title).then(res => {
            const imageUrlList = res.data.data.map(item => item.images.downsized.url);
            console.log(imageUrlList);
            dispatch(receiveUrls(imageUrlList));
        }).catch(err => {
            console.warn(err)
        });
    };
};