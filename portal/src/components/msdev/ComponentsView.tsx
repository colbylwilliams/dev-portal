// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useProjectComponentTemplates } from '../../hooks/teamcloud';
import { ComponentCard } from './ComponentCard';

export interface IComponentsViewProps {

}

export const ComponentsView: React.FC<IComponentsViewProps> = (props) => {


    const { data: templates, isLoading } = useProjectComponentTemplates();

    if (isLoading)
        return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>);

    return (
        <Grid container spacing={4} >
            {templates?.map(template => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={template.id}>
                    <ComponentCard template={template} />
                </Grid>
            ))}
        </Grid>
    );
};