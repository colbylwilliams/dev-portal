"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oauth_app_1 = require("@octokit/oauth-app");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3000;
const getGitHubCreds = () => {
    const clientId = process.env.GITHUB_APP_CLIENT_ID;
    const clientSecret = process.env.GITHUB_APP_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
        throw new Error('GitHub App Client ID and Client Secret are required');
    }
    return { clientId: clientId, clientSecret: clientSecret };
};
const { clientId, clientSecret } = getGitHubCreds();
const server = (0, express_1.default)();
const app = new oauth_app_1.OAuthApp({
    clientId,
    clientSecret,
    defaultScopes: ['repo', 'gist'],
});
app.on('authorization', ({ name, action, token, authentication, scopes, octokit }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`authorization: token recieved: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
app.on('token', ({ name, action, token, authentication, scopes, octokit, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app.on token: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
app.on('token.created', ({ name, action, token, authentication, scopes, octokit, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app.on token.created: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
app.on('token.reset', ({ name, action, token, authentication, scopes, octokit, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app.on token.reset: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
// GitHub Apps only
// app.on('token.refreshed', async ({ name, action, token, authentication, scopes, octokit, }) => {
//     console.log(`app.on token.refreshed: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
// });
// GitHub Apps only
// app.on('token.scoped', async ({ name, action, token, authentication, scopes, octokit, }) => {
//     console.log(`app.on token.scoped: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
// });
app.on('token.deleted', ({ name, action, token, authentication, scopes, octokit, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app.on token.deleted: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
app.on('authorization', ({ name, action, token, authentication, scopes, octokit, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app.on authorization: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
app.on('authorization.deleted', ({ name, action, token, authentication, scopes, octokit, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app.on authorization.deleted: name=${name} action=${action} authenticaiton=${authentication} scopes=${scopes} token=${token}`);
}));
// const { url } = app.getWebFlowAuthorizationUrl({
//     state: 'state123',
//     scopes: ['repo'],
// });
// console.log(`authUrl: ${url}`);
server.use((0, oauth_app_1.createNodeMiddleware)(app));
server.get('/api/foobar', (req, res) => {
    const list = ['item1', 'item2', 'item3'];
    res.json(list);
    console.log('Sent list of items');
});
// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
server.use(express_1.default.static(path_1.default.join(__dirname, 'portal/build')));
// };
// server.use(express.static('../portal/build'));
server.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});
// All other unmatched requests will return the React app
server.get('/*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'portal', 'build', 'index.html'));
});
