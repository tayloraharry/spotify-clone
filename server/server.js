const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const lyricsFinder = require("lyrics-finder");
const { clientId, clientSecret } = require("./constants");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      const { access_token, expires_in } = data.body;
      res.json({
        accessToken: access_token,
        expiresIn: expires_in,
      })
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: clientId,
    clientSecret: clientSecret,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const { access_token, refresh_token, expires_in } = data.body;
      res.json({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.get('/lyrics', async (req, res) => {
  const lyrics = (await lyricsFinder(req.query.artist, req.query.track)) || 'No lyrics found';
  res.json({ lyrics });
});

app.listen(3001);
