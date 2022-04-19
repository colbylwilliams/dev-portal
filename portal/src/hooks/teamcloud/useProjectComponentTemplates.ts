// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useIsAuthenticated } from '@azure/msal-react';
import { useQuery } from 'react-query';
import { useProject } from '.';
import { api, onResponse } from '../../API';

export const useProjectComponentTemplates = () => {

    const isAuthenticated = useIsAuthenticated();

    const { data: project } = useProject();

    return useQuery(['org', project?.organization, 'project', project?.id, 'componenttemplate'], async () => {

        const { data } = await api.getComponentTemplates(project!.organization, project!.id, {
            onResponse: onResponse
        });

        return data;
    }, {
        enabled: isAuthenticated && !!project?.id
    });
};


export const useComponentTemplatesForProject = (org: string, project: string) => {

    const isAuthenticated = useIsAuthenticated();

    return useQuery(['org', org, 'project', project, 'componenttemplate'], async () => {

        const { data } = await api.getComponentTemplates(org, project, {
            onResponse: onResponse
        });

        return data;
    }, {
        enabled: isAuthenticated && !!org && !!project
    });
};
