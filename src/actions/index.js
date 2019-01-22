import {actionTypes} from "./actionTypes";
import giphyApi from "../APIs/giphyAPI";

// export const plus = num => {
//     return {type: actionTypes.PLUS, payload: {number: num}}
// };
// export const minus = num => {
//     return {type: actionTypes.MINUS, payload: {number: num}}
// };
//
// export const asyncMinus = num => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch({type: actionTypes.MINUS, payload: {number: num}});
//         }, 1000)
//     }
// };
//
// export const changeTitle = title => {
//     return {type: actionTypes.CHANGE_TITLE, payload: {title: title}}
// };
//
// export const getJson = () => {
//     return dispatch => {
//         dispatch({type: actionTypes.WAIT});
//         const url = "https://api.myjson.com/bins/159wqn";
//         axios.get(url).then(res => {
//             dispatch(changeTitle(res.data.member[0].name));
//         })
//     }
// };

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