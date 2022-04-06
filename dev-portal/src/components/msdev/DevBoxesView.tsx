// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { DefaultDevBoxes } from '../../model/msdev/DevBox';
import { DevBoxCard } from './DevBoxCard';

export interface IDevBoxesViewProps {

}

export const DevBoxesView: React.FunctionComponent<IDevBoxesViewProps> = (props) => {

    const devboxes = DefaultDevBoxes;

    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                Dev Boxes
            </Typography>
            <Grid container spacing={3}>
                {devboxes.map(devbox => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={devbox.id}>
                        <DevBoxCard devbox={devbox} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}