import { createNodeMiddleware, OAuthApp } from '@octokit/oauth-app';
import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT || 3001;

const getGitHubCreds = (): { clientId: string, clientSecret: string; } => {
    const client_id = process.env.GITHUB_APP_CLIENT_ID;
    const client_secret = process.env.GITHUB_APP_CLIENT_SECRET;

    if (!client_id || !client_secret) {
        throw new Error('GitHub App Client ID and Client Secret are required');
    }

    return { clientId: client_id, clientSecret: client_secret };
};

const { clientId, clientSecret } = getGitHubCreds();

const expressApp = express();

const app = new OAuthApp({
    clientId: clientId,
    clientSecret: clientSecret,
    defaultScopes: ["repo", "gist"],
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

const { url } = app.getWebFlowAuthorizationUrl({
    state: "state123",
    scopes: ["repo"],
});

console.log(`authUrl: ${url}`);

expressApp.use(createNodeMiddleware(app));

expressApp.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});
