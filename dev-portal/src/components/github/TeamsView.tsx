// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TeamCard } from './TeamCard';

import { useTeams } from '../../hooks/github';

export interface ITeamsViewProps {

}

export const TeamsView: React.FunctionComponent<ITeamsViewProps> = (props) => {

    const { data: teams, isLoading } = useTeams();

    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                GitHub Teams
            </Typography>
            <Grid container spacing={3}>
                {teams?.map(team => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={team.id}>
                        <TeamCard team={team} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}