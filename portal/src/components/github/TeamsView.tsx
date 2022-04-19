// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useTeams } from '../../hooks/github';
import { SettingsCheck } from '../SettingsCheck';
import { TeamCard } from './TeamCard';

export interface ITeamsViewProps { }

export const TeamsView: React.FC<ITeamsViewProps> = (props) => {

    const { data: teams, isLoading } = useTeams();

    if (isLoading)
        return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>);

    return (
        <SettingsCheck github>
            <Grid container spacing={3}>
                {teams?.map(team => (
                    <Grid item xs={12} md={6} lg={4} xl={3} key={team.id}>
                        <TeamCard team={team} />
                    </Grid>
                ))}
            </Grid>
        </SettingsCheck>
    );
};