const fetch = require('node-fetch');
const express = require('express')
const app = express()

const spotifyAPIBaseUri = 'https://api.spotify.com'
const spotifyAccountsBaseUri = 'https://accounts.spotify.com'

const clientId = process.env['SPOTIFY_CLIENT_ID']
const clientSecret = process.env['SPOTIFY_CLIENT_SECRET']
const refreshToken = process.env['SPOTIFY_REFRESH_TOKEN']
let accessToken = '';

const refreshAccessToken = () => {
  return fetch(`${spotifyAccountsBaseUri}/api/token`, {
    method: 'POST',
    body: `grant_type=refresh&refresh_token=${refreshToken}`,
    headers: {
      'Authorization': `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString('base64')}`
    }
  })
}

const getRecentlyPlayed = () => {
  return fetch(`${spotifyAPIBaseUri}/v1/me/player/recently-played`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

app.get('/my-recently-played', function (req, res) {
  getRecentlyPlayed()
    .then((recentlyPlayedResponse) => recentlyPlayedResponse.json())
    .then((recentlyPlayedResponseJSON) => {
      res.send(recentlyPlayedResponseJSON);
    })
    .catch(() => {
      refreshAccessToken()
        .then((refreshResponse) => response.json())
        .then((refreshResponseJSON) => {
          accessToken = refreshResponseJSON['access_token'];
          getRecentlyPlayed()
            .then((recentlyPlayedResponse) => recentlyPlayedResponse.json())
            .then((recentlyPlayedResponseJSON) => {
              res.send(recentlyPlayedResponseJSON)
            })
            .catch(() => {
              res.status(500).send('Failed to get recently played tracks');
            })
        })
        .catch(() => {
          res.status(500).send('Failed to refresh Spotify token')
        })
    })
})

app.listen(3000)

//Audio Features
{
    "danceability": 0.956,
    "energy": 0.795,
    "key": 7,
    "loudness": -5.311,
    "mode": 1,
    "speechiness": 0.15,
    "acousticness": 0.00356,
    "instrumentalness":0.889,
    "liveness": 0.0906,
    "valence": 0.841,
    "tempo": 121.294,
    "type": "audio_features",
    "id": "1pKYYY0dkg23sQQXi0Q5zN",
    "track_href": "https://api.spotify.com/v1/tracks/1pKYYY0dkg23sQQXi0Q5zN",
    "analysis_url": "https://api.spotify.com/v1/audio-analysis/1pKYYY0dkg23sQQXi0Q5zN",
    "duration_ms": 429533,
    "time_signature": 4
}