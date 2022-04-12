import { createNodeMiddleware, OAuthApp } from '@octokit/oauth-app';
import 'dotenv/config';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;

const getGitHubCreds = (): { clientId: string, clientSecret: string; } => {
    const clientId = process.env.GITHUB_APP_CLIENT_ID;
    const clientSecret = process.env.GITHUB_APP_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error('GitHub App Client ID and Client Secret are required');
    }

    return { clientId: clientId, clientSecret: clientSecret };
};

const { clientId, clientSecret } = getGitHubCreds();

const server = express();

const app = new OAuthApp({
    clientId,
    clientSecret,
    defaultScopes: ['repo', 'gist'],
});

app.on('authorization', async ({ name, action, token, authentication, scopes, octokit }) => {
    console.log(`authorization: token recieved: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

app.on('token', async ({ name, action, token, authentication, scopes, octokit, }) => {
    console.log(`app.on token: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

app.on('token.created', async ({ name, action, token, authentication, scopes, octokit, }) => {
    console.log(`app.on token.created: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

app.on('token.reset', async ({ name, action, token, authentication, scopes, octokit, }) => {
    console.log(`app.on token.reset: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

// GitHub Apps only
// app.on('token.refreshed', async ({ name, action, token, authentication, scopes, octokit, }) => {
//     console.log(`app.on token.refreshed: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
// });

// GitHub Apps only
// app.on('token.scoped', async ({ name, action, token, authentication, scopes, octokit, }) => {
//     console.log(`app.on token.scoped: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
// });

app.on('token.deleted', async ({ name, action, token, authentication, scopes, octokit, }) => {
    console.log(`app.on token.deleted: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

app.on('authorization', async ({ name, action, token, authentication, scopes, octokit, }) => {
    console.log(`app.on authorization: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

app.on('authorization.deleted', async ({ name, action, token, authentication, scopes, octokit, }) => {
    console.log(`app.on authorization.deleted: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
});

// const { url } = app.getWebFlowAuthorizationUrl({
//     state: 'state123',
//     scopes: ['repo'],
// });

// console.log(`authUrl: ${url}`);

server.use(createNodeMiddleware(app));

server.get('/api/foobar', (req, res) => {
    const list = ['item1', 'item2', 'item3'];
    res.json(list);
    console.log('Sent list of items');
});

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
server.use(express.static(path.join(__dirname, 'portal/build')));
// };
// server.use(express.static('../portal/build'));

server.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});

// All other unmatched requests will return the React app
server.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'portal', 'build', 'index.html'));
});