// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon'


import { AzureIcon, VisualStudioCodeIcon, CodespacesIcon, StackOverflowIcon, AzureDevOpsIcon, GitHubIcon, TeamsIcon, VisualStudioIcon, GitHubActionsIcon, OneDriveIcon, } from './icons';

import { Theme, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

export interface IToolkitCardProps {

}


const tools = [
    {
        url: 'https://github.com/features/codespaces',
        label: 'VS Code',
        icon: <VisualStudioCodeIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: 'https://github.com/codespaces',
        label: 'Codespaces',
        icon: <CodespacesIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Stack Overflow',
        icon: <StackOverflowIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'AzureDevOps',
        icon: <AzureDevOpsIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Azure',
        icon: <AzureIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'GitHub',
        icon: <GitHubIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Teams',
        icon: <TeamsIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'One Drive',
        icon: <OneDriveIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Visual Studio',
        icon: <VisualStudioIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'GitHub Actions',
        icon: <GitHubActionsIcon style={{ height: '100%', width: '100%' }} />
    }
]


export const ToolkitCard: React.FunctionComponent<IToolkitCardProps> = (props) => {

    const theme = useTheme();


    return (
        <Card>
            <CardHeader title='Toolkit' />
            <CardContent sx={{ padding: theme.spacing(0, 2) }}>
                <Grid container spacing={1}>
                    {tools.map((tool, index) => (
                        <Grid item key={index}>
                            <Avatar sx={{ width: 86, height: 86, p: 2, bgcolor: theme.palette.background.paper }}>
                                {tool.icon}
                            </Avatar>
                        </Grid>
                    ))}
                </Grid>

            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: theme.spacing(2) }}>

            </CardActions>

        </Card>

    );
}