const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const Twit = require('twit');

app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));


app.post('/api', (req, res) => {
    const resJson = {
        payloads: []
    };

    const target = req.body.target;
    const T = new Twit({
        consumer_key: 'MiYQjdSHxwmvYv8qhQfTIlZPE',
        consumer_secret: 'xmfytdTFgfCHBoiJBf4aJNoszSnzO9uylTig7bZJwPQkT54Tcf',
        access_token: '915518888367943680-j98KyGJbE2Bi3o8VoSJ8fTZKavBUiml',
        access_token_secret: 'T6kBRh36Ahm7ZU54nJwxAx3FULWJO7nY8NJN2Y8QgJKnr'
    });

    T.get('search/tweets', {
        q: target + ' filter:images exclude:retweets min_faves:400',
        count: 100
    }, (err, data, response) => {
        for (let statues of data.statuses) {
            if (statues.extended_entities && statues.extended_entities.media[0]
                && statues.extended_entities.media[0].media_url) {

                console.log(`>>>${statues.user.name}>${statues.text}`);
                console.log('>>>' + statues.extended_entities.media[0].media_url);

                resJson.payloads.push({
                    text: `${statues.user.name}>${statues.text}`,
                    url: statues.extended_entities.media[0].media_url
                });
            }
        }

        res.json(resJson);
    });
});

app.listen(3000, () => {
    console.log('express is listen port 3000 .....')
});
