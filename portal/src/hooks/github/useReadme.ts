// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { ContentFile } from '../../model/github';
import { useToken } from './useToken';

export const useReadme = (org: string, repo: string) => {

    const { data: token } = useToken();

    return useQuery(['gh-org', org, 'gh-repo', repo, 'readme'], async () => {

        const { data, status } = await new Octokit({
            auth: token,
            userAgent: 'TeamCloud'
        }).rest.repos.getReadme({
            owner: org,
            repo: repo
        });

        console.log(status);
        console.log(data);

        return data as ContentFile;
    }, {
        enabled: !!token
    });
};
