// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { InteractionStatus, InteractionType } from '@azure/msal-browser';
import { AuthenticatedTemplate, MsalAuthenticationResult, useMsal, useMsalAuthentication } from '@azure/msal-react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from '../API';
import { DefaultDevBoxes } from '../model/msdev/DevBox';
import { DashboardView } from './DashboardView';
import { RepoView } from './github/RepoView';
import { TeamsView } from './github/TeamsView';
import MainAppBar from './MainAppBar';
import MainDrawer from './MainDrawer';
import { MainView } from './MainView';
import { ApiView } from './msdev/ApiView';
import { ComponentForm } from './msdev/ComponentForm';
import { ComponentsView } from './msdev/ComponentsView';
import { DevBoxesView } from './msdev/DevBoxesView';
import { DocsView } from './msdev/DocsView';
import { NewView } from './msdev/NewView';
import { ProjectsView } from './msdev/ProjectsView';
import { ProjectView } from './msdev/ProjectView';
import { ServicesView } from './msdev/ServicesView';
import { SettingsView } from './SettingsView';

export interface IRootViewProps { }

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const RootView: React.FC<IRootViewProps> = (props) => {

    const authResult: MsalAuthenticationResult = useMsalAuthentication(InteractionType.Redirect, { scopes: auth.getScopes() });

    const { inProgress } = useMsal();

    useEffect(() => {
        // console.info('inprogress:', inProgress);

        if (authResult.error) {
            console.error('authResult.error:', authResult.error);
        }

        if (authResult.error && inProgress === InteractionStatus.None) {
            console.log('logging in...');
            authResult.login(InteractionType.Redirect, { scopes: auth.getScopes() });
        }
    }, [authResult, inProgress]);


    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // const theme = React.useMemo(() =>
    //     createTheme({

    //         palette: {
    //             mode: prefersDarkMode ? 'dark' : 'light',
    //             // background: {
    //             //     default: prefersDarkMode ? '#333' : '#fff',
    //             //     paper: prefersDarkMode ? '#424242' : '#fff',
    //             // }
    //         },
    //     }),
    //     [prefersDarkMode]
    // );

    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }), []
    );

    const theme = React.useMemo(() =>
        createTheme({

            palette: {
                mode: mode,
                background: {
                    default: mode === 'dark' ? '#333' : '#fff',
                    paper: mode === 'dark' ? '#424242' : '#fff',
                }
            },
        }),
        [mode]
    );

    // const theme = React.useMemo(() =>
    //     createTheme(getDesignTokens(mode))
    //     , [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <AuthenticatedTemplate>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <MainAppBar />
                        <MainDrawer />
                        <Routes>
                            <Route path='/orgs/:orgId' element={
                                <MainView main><DashboardView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/new' element={
                                <MainView main title='New'><NewView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/services' element={
                                <MainView main title='Services'><ServicesView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/devboxes' element={
                                <MainView main title='Dev Boxes'><DevBoxesView devboxes={DefaultDevBoxes} {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/sourcecode' element={
                                <MainView main><RepoView org='microsoft' repo='TeamCloud' {...{}} /></MainView>
                                // <MainView main><RepoView org='microsoft' repo='vscode' {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/teams' element={
                                <MainView main title='GitHub Teams'><TeamsView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/apis' element={
                                <MainView main title='APIs'><ApiView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/docs' element={
                                <MainView main title='Docs'><DocsView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/projects' element={
                                <MainView main title='Projects'><ProjectsView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/projects/:projectId' element={
                                <MainView main><ProjectView {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/projects/:projectId/environments' element={
                                <MainView main title='Environments'><ComponentsView {...{}} /></MainView>
                            } />
                            {/* <Route path='/orgs/:orgId/projects/:projectId/new' element={
                                <MainView main><ComponentForm {...{}} /></MainView>
                            } /> */}
                            <Route path='/orgs/:orgId/projects/:projectId/new/:itemId' element={
                                <MainView main><ComponentForm {...{}} /></MainView>
                            } />
                            <Route path='/orgs/:orgId/settings' element={
                                <MainView main title='Settings'><SettingsView {...{}} /></MainView>
                            } />

                            <Route path='/*' element={
                                <></>
                            } />
                        </Routes>
                    </Box>
                </AuthenticatedTemplate>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
