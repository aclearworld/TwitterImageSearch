import axios from 'axios';

const twitterAPI = target => {
    return axios.post('/api', {target: target});
};

export default twitterAPI;