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
import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';
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
import { Route, Routes } from 'react-router-dom';
import { RepoView } from './github/RepoView';
import { ProjectView } from './msdev/ProjectView';
import { DevBoxesView } from './msdev/DevBoxesView';
import { ProjectsView } from './msdev/ProjectsView';
import { ComponentsView } from './msdev/ComponentsView';
import { DashboardView } from './DashboardView';
import { TeamsView } from './github/TeamsView';

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



    return (
        <ThemeProvider theme={theme}>
            <AuthenticatedTemplate>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <MainAppBar />
                    <MainDrawer />
                    <Routes>
                        <Route path='/orgs/:orgId' element={<DashboardView {...{}} />} />
                        <Route path='/orgs/:orgId/devboxes' element={<DevBoxesView {...{}} />} />
                        {/* <Route path='/orgs/:orgId/environments' element={<ComponentsView {...{}} />} /> */}
                        <Route path='/orgs/:orgId/sourcecode' element={<RepoView org='microsoft' repo='TeamCloud' {...{}} />} />
                        <Route path='/orgs/:orgId/teams' element={<TeamsView {...{}} />} />
                        <Route path='/orgs/:orgId/projects' element={<ProjectsView {...{}} />} />
                        <Route path='/orgs/:orgId/projects/:projectId' element={<ProjectView {...{}} />} />
                        <Route path='/orgs/:orgId/projects/:projectId/environments' element={<ComponentsView {...{}} />} />

                        <Route path='/*' element={
                            <></>
                        } />
                    </Routes>
                </Box>
            </AuthenticatedTemplate>
        </ThemeProvider>
    );
}
