// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { getGitHubToken } from '../../Auth';
import { Repository } from '../../model/github';

export const useRepository = (org: string, repo: string) => {

    const ghToken = getGitHubToken();

    return useQuery(['gh-org', org, 'gh-repo', repo], async () => {

        const { data, status } = await new Octokit({
            auth: ghToken,
            userAgent: 'TeamCloud'
        }).rest.repos.get({
            owner: org,
            repo: repo
        });

        console.log(status);
        console.log(data);

        return data as Repository;
    }, {
        enabled: !!ghToken && !ghToken.startsWith('__')
    });
};
