// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { Repository } from '../../model/github';

export const useRepository = (org: string, repo: string) => {

    return useQuery(['gh-org', org, 'gh-repo', repo], async () => {

        const { data, status } = await new Octokit({
            auth: getGitHubToken(),
            userAgent: 'TeamCloud'
        }).rest.repos.get({
            owner: org,
            repo: repo
        });

        console.log(status);
        console.log(data);

        return data as Repository;
    }, {
        // enabled: isAuthenticated && !!orgId
    });
}
