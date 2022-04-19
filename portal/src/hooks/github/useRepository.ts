// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { Repository } from '../../model/github';
import { useToken } from './useToken';

export const useRepository = (org: string, repo: string) => {

    const { data: token } = useToken();

    return useQuery(['gh-org', org, 'gh-repo', repo], async () => {

        const { data, status } = await new Octokit({
            auth: token,
            userAgent: 'TeamCloud'
        }).rest.repos.get({
            owner: org,
            repo: repo
        });

        console.log(status);
        console.log(data);

        return data as Repository;
    }, {
        enabled: !!token
    });
};
