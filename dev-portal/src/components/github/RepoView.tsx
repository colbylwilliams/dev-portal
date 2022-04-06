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
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
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

import useMediaQuery from '@mui/material/useMediaQuery';
import { useRepository } from '../../hooks/github';
import { ContributorsCard } from './ContributorsCard';
import { LanguageCard } from './LanguageCard';
import { ReleasesCard } from './ReleasesCard';
import { ReadmeCard } from './ReadmeCard';


export interface IRepoViewProps {
    org: string;
    repo: string;
}

export const RepoView: React.FC<IRepoViewProps> = (props) => {

    // const { data: repo, isLoading } = useRepo(props.org, props.repo);

    // if (isLoading) {
    //     return <LinearProgress />;
    // }

    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                {props.repo}
            </Typography>
            <Grid container spacing={4} direction='row'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
                    <Grid container spacing={4} direction='row'>
                        <Grid item xs={12}>
                            <ReadmeCard org={props.org} repo={props.repo} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                    <Grid container spacing={4} direction='row'>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                            <LanguageCard org={props.org} repo={props.repo} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                            <ContributorsCard org={props.org} repo={props.repo} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                            <ReleasesCard org={props.org} repo={props.repo} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
}