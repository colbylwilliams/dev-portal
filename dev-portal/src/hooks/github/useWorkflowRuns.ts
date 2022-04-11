// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { getGitHubToken } from '../../Auth';
import { WorkflowRun } from '../../model/github';

export const useWorkflowRuns = (org: string, repo: string) => {

    const ghToken = getGitHubToken();

    return useQuery(['gh-org', org, 'gh-repo', repo, 'workflow-runs'], async () => {

        const octokit = new Octokit({
            auth: ghToken,
            userAgent: 'TeamCloud'
        });

        const data: WorkflowRun[] = [];

        for await (const response of octokit.paginate.iterator(octokit.rest.actions.listWorkflowRunsForRepo, {
            owner: org,
            repo: repo
        })) {
            data.push(...response.data.workflow_runs);
        }

        console.log(data);

        return data;
    }, {
        enabled: !!ghToken && !ghToken.startsWith('__')
    });
};
