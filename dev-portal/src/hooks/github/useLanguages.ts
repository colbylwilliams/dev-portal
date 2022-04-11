// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { getGitHubToken } from '../../Auth';
import { Language } from '../../model/github';

export const useLanguages = (org: string, repo: string) => {

    const ghToken = getGitHubToken();

    return useQuery(['gh-org', org, 'gh-repo', repo, 'languages'], async () => {

        const octokit = new Octokit({
            auth: ghToken,
            userAgent: 'TeamCloud'
        });

        let data: Language = {};

        for await (const response of octokit.paginate.iterator(octokit.rest.repos.listLanguages, {
            owner: org,
            repo: repo
        })) {
            for (const [key, value] of Object.entries(response.data)) {
                data[key] = value;
            }
        }

        console.log(data);

        return data;
    }, {
        enabled: !!ghToken && !ghToken.startsWith('__')
    });
};
