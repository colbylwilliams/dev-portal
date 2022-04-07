// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { TeamFull } from '../../model/github';

import _ from 'lodash';


export const useTeams = () => {

    return useQuery(['gh-teams'], async () => {

        const octokit = new Octokit({
            auth: getGitHubToken(),
            userAgent: 'TeamCloud'
        });

        // const { data } = await octokit.rest.issues.listForAuthenticatedUser({

        //     sort: 'updated',
        //     filter: 'assigned',
        //     per_page: 20
        // });

        let { data } = await octokit.rest.teams.listForAuthenticatedUser({
            per_page: 25
        });

        // const data: Issue[] = [];
        // for await (const response of octokit.paginate.iterator(octokit.rest.issues.listForAuthenticatedUser, {
        // })) {
        //     data.push(...response.data);
        // }

        data.forEach(team => {
            console.log(`${team.organization.name} -> ${team.organization.login} -> ${team.name}`);
        });
        // console.log(data);

        const foo = _.groupBy(data, team => team.organization.name ?? team.organization.login);

        console.log(foo);

        data = data.sort((a, b) => (a.organization.login < b.organization.login ? -1 : 1));

        return data as TeamFull[];
    }, {
        // enabled: isAuthenticated && !!orgId
    });
}
