// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useProjects } from '../../hooks/teamcloud';
import { ProjectCard } from './ProjectCard';

export interface IProjectsViewProps { }

export const ProjectsView: React.FC<IProjectsViewProps> = (props) => {

    const { data: projects, isLoading } = useProjects();

    if (isLoading)
        return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>);

    return (
        <Grid container spacing={3}>
            {projects?.map((project) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={project.displayName}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    );
};