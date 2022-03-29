// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
// import { InteractionType } from '@azure/msal-browser';
// import { AuthenticatedTemplate, MsalAuthenticationResult, useMsalAuthentication } from '@azure/msal-react';
// import { getTheme, Stack } from '@fluentui/react';
// import { HeaderBar } from '../components';
// import { auth } from '../API';
// import { ContentRouter, NavRouter } from '.';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import MainAppBar from '../components/MainAppBar';
import MainDrawer from '../components/MainDrawer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { AuthenticatedTemplate, MsalAuthenticationResult, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { auth } from '../API';
import useMediaQuery from '@mui/material/useMediaQuery';

export interface IRootViewProps { }

export const RootView: React.FC<IRootViewProps> = (props) => {

    const authResult: MsalAuthenticationResult = useMsalAuthentication(InteractionType.Redirect, { scopes: auth.getScopes() });

    useEffect(() => {
        if (authResult.error) {
            console.log('logging in...')
            authResult.login(InteractionType.Redirect, { scopes: auth.getScopes() });
        }
    }, [authResult]);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(() =>
        createTheme({

            palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
                background: {
                    default: prefersDarkMode ? '#333' : '#fff',
                    paper: prefersDarkMode ? '#424242' : '#fff',
                }
            },
        }),
        [prefersDarkMode],
    );

    // const [drawerOpen, setDrawerOpen] = React.useState(true);

    const projects = [
        {
            displayName: 'Project Alpha',
            description: 'This is the Alpha project description',
        }, {
            displayName: 'Project Beta',
            description: 'This is the Beta project description',
        }, {
            displayName: 'Project Kappa',
            description: 'This is the Kappa project description',
        }, {
            displayName: 'Project Gamma',
            description: 'This is the Gamma project description',
        }
    ];

    return (
        <AuthenticatedTemplate>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <MainAppBar />
                    <MainDrawer />
                    <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
                        <Toolbar />
                        <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                            Projects
                        </Typography>
                        <Grid container spacing={4} direction='row' justifyContent='center'>
                            {projects.map((project) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={project.displayName}>
                                    <Card elevation={3} sx={{ minWidth: 275 }}>
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
                                        <CardActions>
                                            <Button size='small'>Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Box>
                </Box>
            </ThemeProvider>
        </AuthenticatedTemplate>
    );
}
