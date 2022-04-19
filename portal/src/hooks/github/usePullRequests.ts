// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { Contributor } from '../../model/github';
import { useToken } from './useToken';

export const usePullRequests = (org: string, repo: string) => {

    const { data: token } = useToken();

    return useQuery(['gh-org', org, 'gh-prs'], async () => {

        const octokit = new Octokit({
            auth: token,
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
        enabled: !!token
    });
};
