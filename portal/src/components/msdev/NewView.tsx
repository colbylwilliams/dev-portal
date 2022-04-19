// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { ComponentTemplate } from 'teamcloud';
import { useComponentTemplatesForProject } from '../../hooks/teamcloud/useProjectComponentTemplates';
import { ComponentCard } from './ComponentCard';

export interface INewViewProps {

}
const devBoxTemplate: ComponentTemplate = {
    organization: "c5d3b3f2-bba6-48cf-a0ac-241c00bee9d7",
    organizationName: "contoso",
    parentId: "3e0ca0d0-651a-405a-b51b-5a302672e256",
    displayName: "Frontend Box",
    description: "# App Service\n\nThis template deploys a new Dev Box. ",
    repository: {
        url: "https://github.com/microsoft/TeamCloud-Project-Sample",
        token: undefined,
        version: "main",
        baselUrl: "https://github.com",
        mountUrl: undefined,
        ref: "e8b749883a94e8052f96a2ce96f44615538cf4e1",
        provider: "GitHub",
        type: "Branch",
        organization: "microsoft",
        repository: "TeamCloud-Project-Sample",
        project: undefined
    },
    permissions: {
        owner: [
            "Contributor"
        ]
    },
    inputJsonSchema: "{\"type\":\"object\",\"properties\":{\"runtime\":{\"$id\":\"runtime\",\"title\":\"Runtime\",\"displayName\":\"Runtime\",\"value\":\"dotnet\",\"type\":\"string\",\"default\":\"dotnet\",\"enum\":[\"node\",\"dotnet\",\"java\"]}},\"required\":[\"runtime\"]}",
    tasks: [
        {
            id: "reset",
            displayName: "Reset",
            description: "Reset the component to its original state.",
            inputJsonSchema: undefined,
            type: "Custom",
            typeName: "reset"
        }
    ],
    taskRunner: {
        id: "teamcloud.azurecr.io/teamcloud/tcrunner-terraform",
        with: {},
        // webServer: false
    },
    type: "DevBox",
    folder: "app-service",
    configuration: {
        isolation: "ResourceGroup"
    },
    id: "3dd58f15-93ae-787a-18f5-059caceb5394",
    // _timestamp: undefined,
    // _etag: null
};

export const NewView: React.FC<INewViewProps> = (props) => {

    // const theme = useTheme();

    // const { data: templates, isLoading } = useComponentTemplatesForProject('contoso', 'project-alpha');
    const { data: templates } = useComponentTemplatesForProject('c5d3b3f2-bba6-48cf-a0ac-241c00bee9d7', 'ae1336fd-58e6-4cdc-bc57-1d857e0ac40e');

    useEffect(() => {
        if (templates && templates.length > 0)
            console.log(templates[0]);
    }, [templates]);

    return (
        <Stack spacing={3}>
            <Stack>

                <Typography color='text.secondary' pl={0} pb={2} variant='h5' component='div'>
                    Dev Boxes
                </Typography>

                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <ComponentCard template={devBoxTemplate} />
                    </Grid>
                </Grid>
            </Stack>
            <Stack>
                <Typography color='text.secondary' pl={0} pb={2} variant='h5' component='div'>
                    Repositories
                </Typography>
                <Grid container spacing={2} >
                    {templates?.filter(t => t.type === 'Repository').map(template => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={template.id}>
                            <ComponentCard template={template} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <Stack>
                <Typography color='text.secondary' pl={0} pb={2} variant='h5' component='div'>
                    Environments
                </Typography>
                <Grid container spacing={2} >
                    {templates?.filter(t => t.type === 'Environment').map(template => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={template.id}>
                            <ComponentCard template={template} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>

        </Stack>

    );
};