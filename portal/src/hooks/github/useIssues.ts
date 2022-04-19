// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { Issue } from '../../model/github';
import { useToken } from './useToken';

export const useIssues = () => {

    const { data: token } = useToken();

    return useQuery(['gh-issues'], async () => {

        const octokit = new Octokit({
            auth: token,
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

        const issues = data as Issue[];

        issues.forEach(issue => {
            console.log(issue.title);
        });
        // console.log(data);

        return issues;
    }, {
        enabled: !!token
    });
};
