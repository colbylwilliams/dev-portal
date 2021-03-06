// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { Release } from '../../model/github';
import { useToken } from './useToken';

export const useReleases = (org: string, repo: string) => {

    const { data: token } = useToken();

    return useQuery(['gh-org', org, 'gh-repo', repo, 'releases'], async () => {

        const octokit = new Octokit({
            auth: token,
            userAgent: 'TeamCloud'
        });


        const { data } = await octokit.rest.repos.listReleases({
            owner: org,
            repo: repo,
            per_page: 5
        });

        // let data: Release[] = [];
        // for await (const response of octokit.paginate.iterator(octokit.rest.repos.listReleases, {
        //     owner: org,
        //     repo: repo,
        // })) {
        //     console.log(response);
        //     data.push(...response.data);
        // }

        console.log(data);

        return data as Release[];
    }, {
        enabled: !!token
    });
};
