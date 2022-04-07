// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DefaultDevBoxes } from '../../model/msdev/DevBox';
import { DevBoxCard } from './DevBoxCard';

export interface IProjectViewProps {

}

interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}>
            {value === index && (
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


export const ProjectView: React.FunctionComponent<IProjectViewProps> = (props) => {

    const [value, setValue] = React.useState('Overview');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const devboxes = DefaultDevBoxes.filter(devbox => devbox.project === 'Project Alpha');

    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Tabs value={value} onChange={handleChange} >
                <Tab value='Overview' label='Overview' />
                <Tab value='Source Code' label='Source Code' />
                <Tab value='Dev Boxes' label='Dev Boxes' />
                <Tab value='Environments' label='Environments' />
                <Tab value='Workflows' label='Workflows' />
                <Tab value='Team' label='Team' />
            </Tabs>
            <TabPanel value={value} index={'Overview'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Overview
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={'Source code'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Source code
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={'Dev Boxes'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Dev boxes
                </Typography>
                <Grid container spacing={3}>
                    {devboxes.map(devbox => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={devbox.id}>
                            <DevBoxCard devbox={devbox} />
                        </Grid>
                    ))}
                </Grid>

            </TabPanel>
            {/* <TabPanel value={value} index={'Codespaces'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Codespaces
                </Typography>
            </TabPanel> */}
            <TabPanel value={value} index={'Environments'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Environments
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={'Workflows'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Workflows
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={'Team'} >
                <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>
                    Team
                </Typography>
            </TabPanel>
        </Box>
    );
}