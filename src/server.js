const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const Twit = require('twit');

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));


app.post('/mock', (req, res) => {
    const resJson = {
        payloads: [
            {
                text: '画像1',
                url: 'https://pbs.twimg.com/media/DyFQ8-ZVAAEDyuj.jpg'
            },
            {
                text: '画像2',
                url: 'https://pbs.twimg.com/media/DyFEzCZUYAQFj1K.jpg'
            },
        ]
    };
    res.json(resJson);
});


app.post('/api', (req, res) => {
    const resJson = {
        payloads: []
    };

    if (!req.body.target) return;
    const target = req.body.target;

    const T = new Twit({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
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

app.listen(2929, () => {
    console.log('express is listen port 2929 .....')
});
