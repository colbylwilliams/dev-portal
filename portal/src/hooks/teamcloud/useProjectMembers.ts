// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { useIsAuthenticated } from '@azure/msal-react';
import { ProjectMember } from '../../model';
import { getGraphPrincipal } from '../../MSGraph';
import { useProject, useProjectUsers, useUsersForProject } from '.';

export const useProjectMembers = () => {

    const isAuthenticated = useIsAuthenticated();

    const { data: project } = useProject();
    const { data: users } = useProjectUsers();

    return useQuery(['org', project?.organization, 'project', project?.id, 'members'],
        async () => await Promise.all(users!.map(async u => new ProjectMember(u, await getGraphPrincipal(u), project!.id))),
        {
            enabled: isAuthenticated && !!project?.id && !!users && users.length > 0
        });
}


export const useMembersForProject = (org: string, project: string) => {

    const isAuthenticated = useIsAuthenticated();

    const { data: users } = useUsersForProject(org, project);

    return useQuery(['org', org, 'project', project, 'members'],
        async () => await Promise.all(users!.map(async u => new ProjectMember(u, await getGraphPrincipal(u), project))),
        {
            enabled: isAuthenticated && !!org && !!project && !!users && users.length > 0
        });
}
