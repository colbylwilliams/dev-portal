// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { Issue } from '../../model/github';

export const useIssues = () => {

    return useQuery(['gh-issues'], async () => {

        const octokit = new Octokit({
            auth: getGitHubToken(),
            userAgent: 'TeamCloud'
        });

        // const { data } = await octokit.rest.issues.listForAuthenticatedUser({

        //     sort: 'updated',
        //     filter: 'assigned',
        //     per_page: 20
        // });

        const { data } = await octokit.rest.issues.listForAuthenticatedUser({
            state: 'open',
            sort: 'updated',
            direction: 'desc',
            filter: 'assigned',
            per_page: 20
        });

        // const data: Issue[] = [];
        // for await (const response of octokit.paginate.iterator(octokit.rest.issues.listForAuthenticatedUser, {
        // })) {
        //     data.push(...response.data);
        // }

        data.forEach(issue => {
            console.log(issue.title);
        });
        // console.log(data);

        return data as Issue[];
    }, {
        // enabled: isAuthenticated && !!orgId
    });
}
