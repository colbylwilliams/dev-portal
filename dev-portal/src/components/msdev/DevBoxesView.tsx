// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { DevBox } from '../../model/msdev/DevBox';
import { DevBoxCard } from './DevBoxCard';

export interface IDevBoxesViewProps {
    devboxes?: DevBox[];
}

export const DevBoxesView: React.FC<IDevBoxesViewProps> = (props) => {

    const { devboxes } = props;

    if (!devboxes)
        return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>);

    return (
        <Grid container spacing={3}>
            {devboxes?.map(devbox => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={devbox.id}>
                    <DevBoxCard devbox={devbox} />
                </Grid>
            ))}
        </Grid>
    );
}