// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Grid from '@mui/material/Grid';
import React from 'react';
import { DocsCard } from './DocsCard';
// import { useProjects } from '../../hooks/teamcloud';


export interface IDocsViewProps { }

const docs = ['docs1', 'docs2', 'docs3'];

export const DocsView: React.FC<IDocsViewProps> = (props) => {

    // if (isLoading)
    //     return (<Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
    //         <CircularProgress />
    //     </Box>);

    return (
        <Grid container spacing={3}>
            {docs?.map((doc) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={doc}>
                    <DocsCard />
                </Grid>
            ))}
        </Grid>
    );
};