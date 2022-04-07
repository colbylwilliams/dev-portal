// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { useProjectComponentTemplates } from '../../hooks/teamcloud';
import { DefaultDevBoxes } from '../../model/msdev/DevBox';
import { ComponentCard } from './ComponentCard';
import { DevBoxCard } from './DevBoxCard';

export interface IComponentsViewProps {

}

export const ComponentsView: React.FunctionComponent<IComponentsViewProps> = (props) => {


    const { data: templates, isLoading: templatesIsLoading } = useProjectComponentTemplates();

    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                Environment Templates
            </Typography>
            <Grid container spacing={4} >
                {templates?.map(template => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={template.id}>
                        <ComponentCard template={template} />
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
}