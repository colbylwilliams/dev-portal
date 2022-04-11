// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Grid from '@mui/material/Grid';
import React from 'react';
import { ApiCard } from './ApiCard';
// import { useProjects } from '../../hooks/teamcloud';


export interface IApiViewProps { }

const apis = ['api1', 'api2', 'api3'];

export const ApiView: React.FC<IApiViewProps> = (props) => {


    // if (isLoading)
    //     return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
    //         <CircularProgress />
    //     </Box>);

    return (
        <Grid container spacing={3}>
            {apis?.map((api) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={api}>
                    <ApiCard />
                </Grid>
            ))}
        </Grid>
    );
};