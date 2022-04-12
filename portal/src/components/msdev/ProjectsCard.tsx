// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useProjects } from '../../hooks/teamcloud';
import { ProjectCard } from './ProjectCard';


export interface IProjectsCardProps {

}

export const ProjectsCard: React.FC<IProjectsCardProps> = (props) => {

    const theme = useTheme();

    const { data: projects } = useProjects();

    return (
        <Card elevation={0}>
            <CardHeader title='Projects' />
            <CardContent sx={{ padding: theme.spacing(0, 2) }}>
                <Grid container spacing={2} justifyContent='center'>
                    {projects?.map((project, index) => (
                        <Grid item sm={12} lg={4} key={index} py={theme.spacing(0)}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>

            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: theme.spacing(2) }}>

            </CardActions>
        </Card>
    );
};