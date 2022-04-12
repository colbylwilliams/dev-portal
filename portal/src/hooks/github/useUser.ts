// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { getGitHubToken } from '../../Auth';
import { User } from '../../model/github';

export const useUser = (username?: string) => {

    const ghToken = getGitHubToken();

    return useQuery(['gh-user', username], async () => {

        const { data } = await new Octokit({
            auth: ghToken,
            userAgent: 'TeamCloud'
        }).rest.users.getByUsername({
            username: username!
        });

        console.log(data);

        return data as User;
    }, {
        enabled: !!username && !!ghToken && !ghToken.startsWith('__')
    });
};
