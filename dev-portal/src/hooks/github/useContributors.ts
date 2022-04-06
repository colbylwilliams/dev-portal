// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { Contributor } from '../../model/github';

export const useContributors = (org: string, repo: string) => {

    return useQuery(['gh-org', org, 'gh-repo', repo, 'contributors'], async () => {

        const octokit = new Octokit({
            auth: getGitHubToken(),
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
        // enabled: isAuthenticated && !!orgId
    });
}
