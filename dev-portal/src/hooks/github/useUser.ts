// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { User } from '../../model/github';

export const useUser = (username?: string) => {

    return useQuery(['gh-user', username], async () => {

        const { data } = await new Octokit({
            auth: getGitHubToken(),
            userAgent: 'TeamCloud'
        }).rest.users.getByUsername({
            username: username!
        });

        console.log(data);

        return data as User;
    }, {
        enabled: !!username
    });
}
