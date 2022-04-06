// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { Octokit } from 'octokit';
import { getGitHubToken } from '../../Auth';
import { WorkflowRun } from '../../model/github';

export const useWorkflowRuns = (org: string, repo: string) => {

    return useQuery(['gh-org', org, 'gh-repo', repo, 'workflow-runs'], async () => {

        const octokit = new Octokit({
            auth: getGitHubToken(),
            userAgent: 'TeamCloud'
        });

        const data: WorkflowRun[] = [];

        for await (const response of octokit.paginate.iterator(octokit.rest.actions.listWorkflowRunsForRepo, {
            owner: org,
            repo: repo
        })) {
            data.push(...response.data.workflow_runs)
        }

        console.log(data);

        return data;
    }, {
        // enabled: isAuthenticated && !!orgId
    });
}
