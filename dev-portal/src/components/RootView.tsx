// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, MsalAuthenticationResult, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../API';
import { DefaultDevBoxes } from '../model/msdev/DevBox';
import { RepoView } from './github/RepoView';
import { ProjectView } from './msdev/ProjectView';
import { DevBoxesView } from './msdev/DevBoxesView';
import { ProjectsView } from './msdev/ProjectsView';
import { ComponentsView } from './msdev/ComponentsView';
import { DashboardView } from './DashboardView';
import { TeamsView } from './github/TeamsView';
import { MainView } from './MainView';

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
                        <Route path='/orgs/:orgId' element={<MainView main><DashboardView {...{}} /></MainView>} />
                        <Route path='/orgs/:orgId/devboxes' element={<MainView main title='Dev Boxes'><DevBoxesView devboxes={DefaultDevBoxes} {...{}} /></MainView>} />
                        {/* <Route path='/orgs/:orgId/environments' element={<MainView main title={}><ComponentsView {...{}} />} /></MainView> */}
                        <Route path='/orgs/:orgId/sourcecode' element={<MainView main><RepoView org='microsoft' repo='TeamCloud' {...{}} /></MainView>} />
                        <Route path='/orgs/:orgId/teams' element={<MainView main title='GitHub Teams'><TeamsView {...{}} /></MainView>} />
                        <Route path='/orgs/:orgId/projects' element={<MainView main title='Projects'><ProjectsView {...{}} /></MainView>} />
                        <Route path='/orgs/:orgId/projects/:projectId' element={<MainView main><ProjectView {...{}} /></MainView>} />
                        <Route path='/orgs/:orgId/projects/:projectId/environments' element={<MainView main title='Environments'><ComponentsView {...{}} /></MainView>} />

                        <Route path='/*' element={
                            <></>
                        } />
                    </Routes>
                </Box>
            </AuthenticatedTemplate>
        </ThemeProvider>
    );
}
