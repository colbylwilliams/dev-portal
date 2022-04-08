// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Grid from '@mui/material/Grid';
import { TeamCard } from './TeamCard';
import { useTeams } from '../../hooks/github';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export interface ITeamsViewProps { }

export const TeamsView: React.FC<ITeamsViewProps> = (props) => {

    const { data: teams, isLoading } = useTeams();

    if (isLoading)
        return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>);

    return (
        <Grid container spacing={3}>
            {teams?.map(team => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={team.id}>
                    <TeamCard team={team} />
                </Grid>
            ))}
        </Grid>
    );
}