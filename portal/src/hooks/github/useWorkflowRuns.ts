// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { WorkflowRun } from '../../model/github';
import { useToken } from './useToken';

export const useWorkflowRuns = (org: string, repo: string) => {

    const { data: token } = useToken();

    return useQuery(['gh-org', org, 'gh-repo', repo, 'workflow-runs'], async () => {

        const octokit = new Octokit({
            auth: token,
            userAgent: 'TeamCloud'
        });

        const response = await octokit.rest.actions.listWorkflowRunsForRepo({
            owner: org,
            repo: repo,
            per_page: 30
        });

        const data = response.data.workflow_runs as WorkflowRun[];

        // const data: WorkflowRun[] = [];

        // for await (const response of octokit.paginate.iterator(octokit.rest.actions.listWorkflowRunsForRepo, {
        //     owner: org,
        //     repo: repo
        // })) {
        //     data.push(...response.data.workflow_runs);
        // }

        console.log(data);

        return data;
    }, {
        enabled: !!token
    });
};
