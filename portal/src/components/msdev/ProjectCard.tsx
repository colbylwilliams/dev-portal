// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import RocketLaunch from '@mui/icons-material/RocketLaunch';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from 'teamcloud';
import { MemberAvatarGroup } from './MemberAvatarGroup';

export interface IProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<IProjectCardProps> = (props) => {

    const { project } = props;

    const theme = useTheme();

    const navigate = useNavigate();

    return (
        <Card sx={{ p: 1 }}>
            <CardHeader title={project.displayName} subheader={project.organizationName} />
            <Divider />
            <CardContent sx={{ pt: 2 }}>
                <Typography variant='subtitle2' gutterBottom component='div'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <Typography variant='overline' display='block' gutterBottom pt='28px'>
                    Tags
                </Typography>

                <Stack direction='row' spacing={1}>
                    <Chip label='azure' color='primary' size='small' component='a' href='#basic-chip' clickable />
                    <Chip label='project' color='success' size='small' component='a' href='#basic-chip' clickable />
                </Stack>

                <Typography variant='overline' display='block' gutterBottom pt='28px'>
                    Members
                </Typography>

                <MemberAvatarGroup org={project.organization} project={project.id} />
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: theme.spacing(2) }}>
                <Button color='inherit' variant='outlined' startIcon={<RocketLaunch />}
                    onClick={() => navigate(`/orgs/${project.organizationName}/projects/${project.slug}`)}>Open project</Button>
            </CardActions>
        </Card>
    );
};