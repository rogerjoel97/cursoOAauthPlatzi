// server.js

const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const port = 3000
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'https://pruebaRoger',
  issuerBaseURL: `https://dev-8o31cjmx.us.auth0.com`,
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
    res.json({
      message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
});
  
  // This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })