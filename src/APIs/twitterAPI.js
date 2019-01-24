import axios from 'axios';
import Twit from 'twit';

const T = new Twit({
    consumer_key: 'MiYQjdSHxwmvYv8qhQfTIlZPE',
    consumer_secret: 'xmfytdTFgfCHBoiJBf4aJNoszSnzO9uylTig7bZJwPQkT54Tcf',
    access_token: '915518888367943680-j98KyGJbE2Bi3o8VoSJ8fTZKavBUiml',
    access_token_secret: 'T6kBRh36Ahm7ZU54nJwxAx3FULWJO7nY8NJN2Y8QgJKnr'
});


const twitterAPI = target => {
    const search = target;
    return T.get('search/tweets', {q: search + ' filter:images exclude:retweets min_faves:1000', count: 100});
};

export default twitterAPI;