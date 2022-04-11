// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { getGitHubToken } from '../../Auth';
import { Contributor } from '../../model/github';

export const usePullRequests = (org: string, repo: string) => {

    const ghToken = getGitHubToken();

    return useQuery(['gh-org', org, 'gh-prs'], async () => {

        const octokit = new Octokit({
            auth: ghToken,
            userAgent: 'TeamCloud'
        });

        const data: Contributor[] = [];

        for await (const response of octokit.paginate.iterator(octokit.rest.repos.listContributors, {
            owner: org,
            repo: repo
        })) {
            data.push(...response.data);
        }

        console.log(data);

        return data;
    }, {
        enabled: !!ghToken && !ghToken.startsWith('__')
    });
};
