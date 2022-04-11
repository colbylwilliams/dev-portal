// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AzureDevOpsIcon, AzureIcon, CodespacesIcon, GitHubActionsIcon, GitHubIcon, OneDriveIcon, StackOverflowIcon, TeamsIcon, VisualStudioCodeIcon, VisualStudioIcon } from './icons';


export interface IToolkitCardProps {

}

const tools = [
    {
        url: 'https://github.com/features/codespaces',
        label: 'VS Code',
        alt: 'VS Code',
        icon: <VisualStudioCodeIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: 'https://github.com/codespaces',
        label: 'Codespaces',
        alt: 'GitHub Codespaces',
        icon: <CodespacesIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Stack Overflow',
        alt: 'Stack Overflow',
        icon: <StackOverflowIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Azure DevOps',
        alt: 'Azure DevOps',
        icon: <AzureDevOpsIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Azure',
        alt: 'Azure',
        icon: <AzureIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'GitHub Actions',
        alt: 'GitHub Actions',
        icon: <GitHubActionsIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'OneDrive',
        alt: 'Microsoft OneDrive',
        icon: <OneDriveIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Microsoft Teams',
        alt: 'Microsoft Teams',
        icon: <TeamsIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'Visual Studio',
        alt: 'Visual Studio',
        icon: <VisualStudioIcon style={{ height: '100%', width: '100%' }} />
    }, {
        url: '#',
        label: 'GitHub',
        alt: 'GitHub',
        icon: <GitHubIcon style={{ height: '100%', width: '100%' }} />
    }
];


export const ToolkitCard: React.FC<IToolkitCardProps> = (props) => {

    const theme = useTheme();


    return (
        <Card elevation={0}>
            <CardHeader title='Toolkit' />
            <CardContent sx={{ padding: theme.spacing(0, 2) }}>
                <Card elevation={0}>
                    <CardContent sx={{ padding: theme.spacing(0) }}>

                        <Grid container spacing={1.2} pt={2} justifyContent='space-evenly'>
                            {tools.map((tool, index) => (
                                <Grid item key={index} py={theme.spacing(0)}>
                                    <IconButton>
                                        <Avatar alt={tool.alt} sx={{ width: 86, height: 86, p: 2, bgcolor: theme.palette.background.default }}>
                                            {tool.icon}
                                        </Avatar>
                                    </IconButton>
                                    <Typography variant='caption' display='block' color={theme.palette.text.secondary} sx={{ maxWidth: 102, textAlign: 'center' }}>
                                        {tool.label}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>

            </CardContent>

        </Card>

    );
};