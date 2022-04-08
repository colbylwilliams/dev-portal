// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useTheme } from '@mui/material/styles';
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
            <CardContent>
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
                <Button color='inherit' variant='outlined' startIcon={<RocketLaunchIcon />}
                    onClick={() => navigate(`/orgs/${project.organizationName}/projects/${project.slug}`)}>Open project</Button>
            </CardActions>
        </Card>
    );
}