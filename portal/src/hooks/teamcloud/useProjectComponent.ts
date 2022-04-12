// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery } from 'react-query'
import { useIsAuthenticated } from '@azure/msal-react';
import { api, onResponse } from '../../API';
import { useUrl } from '../useUrl';
import { useProject } from '.';

export const useProjectComponent = (required?: boolean) => {

    const { navId, itemId } = useUrl() as { navId: string, itemId: string };
    const { data: project } = useProject();

    const isAuthenticated = useIsAuthenticated();

    // TODO: what?
    return useQuery(['org', project?.organization, 'project', project?.id, 'component', itemId], async () => {

        const { data } = await api.getComponent(itemId, project!.organization, project!.id, {
            onResponse: (raw, flat) => onResponse
        });

        return data;

    }, {
        enabled: isAuthenticated && !!project?.id && !!navId && navId.toLowerCase() === 'components' && !!itemId,
    });
}
