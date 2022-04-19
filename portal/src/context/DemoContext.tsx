// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { createContext, useState } from 'react';

export const DemoContext = createContext({
    githubToken: null as string | null,
    setGithubToken: (token: string | null) => { },
});

export const DemoProvider = (props: any) => {

    const tokenKey = 'MSDEV:GITHUB_TOKEN';

    const [githubToken, _setGithubToken] = useState(localStorage.getItem(tokenKey));


    const setGithubToken = (token: string | null) => {
        token == null ? localStorage.removeItem(tokenKey) : localStorage.setItem(tokenKey, token);
        _setGithubToken(token);
    };

    // const isAuthenticated = useIsAuthenticated();

    // const { data: graphUser } = useQuery('graphUser', async () => {
    //     console.log(`- setGraphUser`);
    //     const response = await getMe();
    //     console.log(`+ setGraphUser`);
    //     return response;
    // }, {
    //     refetchOnMount: false,
    //     refetchOnWindowFocus: false,
    //     enabled: isAuthenticated
    // });

    return <DemoContext.Provider value={{
        githubToken: githubToken,
        setGithubToken: setGithubToken
    }} {...props} />;
};