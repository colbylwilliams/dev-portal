// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import _ from 'lodash';
import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { getGitHubToken } from '../../Auth';
import { TeamFull } from '../../model/github';


export const useTeams = () => {

    const ghToken = getGitHubToken();

    return useQuery(['gh-teams'], async () => {

        const octokit = new Octokit({
            auth: ghToken,
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
        enabled: !!ghToken && !ghToken.startsWith('__')
    });
};
