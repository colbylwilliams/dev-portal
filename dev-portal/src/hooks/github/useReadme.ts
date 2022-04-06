// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { ContentFile } from '../../model/github';

export const useReadme = (org: string, repo: string) => {

    return useQuery(['gh-org', org, 'gh-repo', repo, 'readme'], async () => {

        const { data, status } = await new Octokit({
            auth: getGitHubToken(),
            userAgent: 'TeamCloud'
        }).rest.repos.getReadme({
            owner: org,
            repo: repo
        });

        console.log(status);
        console.log(data);

        return data as ContentFile;
    }, {
        // enabled: isAuthenticated && !!orgId
    });
}
