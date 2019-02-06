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
        if (process.env.NODE_ENV === 'development') {
            const mockResponse = [
                {
                    text: '画像1',
                    url: 'https://pbs.twimg.com/media/DyFQ8-ZVAAEDyuj.jpg'
                },
                {
                    text: '画像2',
                    url: 'https://pbs.twimg.com/media/DyFEzCZUYAQFj1K.jpg'
                },
            ];

            dispatch(receiveUrls(mockResponse));
        } else {
            twitterAPI(title)
                .then(res => {
                    console.log(res);
                    dispatch(receiveUrls(res.data.payloads));
                })
                .catch(err => {
                    console.log('caught error', err.stack);
                })
        }
    };
};