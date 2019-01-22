import axios from 'axios';

const giphyApi = target => {
    const search = target;
    const key = 'ZgSAMcxFnbVfq5NEBEIsgHPB0HxdG0M8';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    //return Promse
    return axios.get(url);
};

export default giphyApi;