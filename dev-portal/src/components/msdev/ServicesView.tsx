// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AzureDevOpsIcon, AzureIcon, CodespacesIcon, GitHubActionsIcon, GitHubIcon, OneDriveIcon, StackOverflowIcon, TeamsIcon, VisualStudioCodeIcon, VisualStudioIcon } from './icons';
import { ServiceCard } from './ServiceCard';


export interface IServicesViewProps {

}

const services = [
    {
        url: 'https://github.com/features/codespaces',
        label: 'VS Code',
        alt: 'VS Code',
        icon: <VisualStudioCodeIcon style={{ height: '100%', width: '100%' }} />,
        featured: false
    }, {
        url: 'https://github.com/codespaces',
        label: 'Codespaces',
        alt: 'GitHub Codespaces',
        icon: <CodespacesIcon style={{ height: '100%', width: '100%' }} />,
        featured: false
    }, {
        url: '#',
        label: 'Stack Overflow',
        alt: 'Stack Overflow',
        icon: <StackOverflowIcon style={{ height: '100%', width: '100%' }} />,
        featured: false
    }, {
        url: '#',
        label: 'Azure DevOps',
        alt: 'Azure DevOps',
        icon: <AzureDevOpsIcon style={{ height: '100%', width: '100%' }} />,
        featured: true
    }, {
        url: '#',
        label: 'Azure',
        alt: 'Azure',
        icon: <AzureIcon style={{ height: '100%', width: '100%' }} />,
        featured: true
    }, {
        url: '#',
        label: 'GitHub Actions',
        alt: 'GitHub Actions',
        icon: <GitHubActionsIcon style={{ height: '100%', width: '100%' }} />,
        featured: false
    }, {
        url: '#',
        label: 'OneDrive',
        alt: 'Microsoft OneDrive',
        icon: <OneDriveIcon style={{ height: '100%', width: '100%' }} />,
        featured: false
    }, {
        url: '#',
        label: 'Microsoft Teams',
        alt: 'Microsoft Teams',
        icon: <TeamsIcon style={{ height: '100%', width: '100%' }} />,
        featured: true
    }, {
        url: '#',
        label: 'Visual Studio',
        alt: 'Visual Studio',
        icon: <VisualStudioIcon style={{ height: '100%', width: '100%' }} />,
        featured: false
    }, {
        url: '#',
        label: 'GitHub',
        alt: 'GitHub',
        icon: <GitHubIcon style={{ height: '100%', width: '100%' }} />,
        featured: true
    }
];

// const featured = services.filter(s => s.featured);


export const ServicesView: React.FC<IServicesViewProps> = (props) => {

    const theme = useTheme();

    return (

        <Stack spacing={3}>
            <Stack>

                <Typography color='text.secondary' pl={0} pb={2} variant='h5' component='div'>
                    Featured Services
                </Typography>

                <Grid container spacing={2} >
                    {services.filter(s => s.featured).map(service => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={service.alt}>
                            <ServiceCard service={service} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            {/* <Divider /> */}
            <Stack>

                <Typography color='text.secondary' pl={0} pb={2} variant='h5' component='div'>
                    All Services
                </Typography>

                <Card elevation={0}>
                    <CardContent sx={{ padding: theme.spacing(0) }}>

                        <List>
                            {services.map((service, index) => (
                                <ListItemButton divider={index < services.length - 1} key={service.alt}>
                                    <ListItemIcon sx={{ width: 86, height: 86, p: 2 }}>{service.icon}</ListItemIcon>
                                    <ListItemText primary={service.label} secondary={service.url} />
                                </ListItemButton>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>


    );
};