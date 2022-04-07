// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrg } from '../../hooks/teamcloud';

export interface IProjectsViewProps {

}

const projects = [
    {
        slug: 'project-alpha',
        displayName: 'Project Alpha',
        description: 'This is the Alpha project description',
    }, {
        slug: 'project-beta',
        displayName: 'Project Beta',
        description: 'This is the Beta project description',
    }, {
        slug: 'project-kappa',
        displayName: 'Project Kappa',
        description: 'This is the Kappa project description',
    }, {
        slug: 'project-gamma',
        displayName: 'Project Gamma',
        description: 'This is the Gamma project description',
    }
];

export const ProjectsView: React.FunctionComponent<IProjectsViewProps> = (props) => {

    const { data: org } = useOrg();

    const navigate = useNavigate();

    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4} direction='row' justifyContent='center'>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.displayName}>
                        <Card elevation={3} sx={{ minWidth: 275 }}>
                            <CardActionArea>

                                <CardHeader title={project.displayName} subheader={project.description} />
                                <CardContent>
                                    <Typography variant='overline' display='block' gutterBottom>
                                        Description
                                    </Typography>
                                    <Typography variant='subtitle2' gutterBottom component='div'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                    <Typography variant='subtitle2' gutterBottom component='div'>
                                        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                                    </Typography>

                                    <Typography variant='overline' display='block' gutterBottom pt='28px'>
                                        Tags
                                    </Typography>

                                    <Stack direction='row' spacing={1}>
                                        <Chip label='azure' color='primary' size='small' component='a' href='#basic-chip' clickable />
                                        <Chip label='project' color='success' size='small' component='a' href='#basic-chip' clickable />
                                    </Stack>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' onClick={() => navigate(`/orgs/${org?.slug}/projects/${project.slug}`)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}