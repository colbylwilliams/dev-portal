// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
// import { useIssues } from '../hooks/github';
import { ReactComponent as ContosoLogo } from '../img/contoso_logo.svg'
import { ToolkitCard } from './msdev/ToolkitCard';
import { ProjectsCard } from './msdev/ProjectsCard';

export interface IDashboardViewProps {

}

export const DashboardView: React.FC<IDashboardViewProps> = (props) => {

    const theme = useTheme();

    // const { data: issues, isLoading } = useIssues();

    const [filter, setFilter] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setFilter(event.target.value);
    };



    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Grid container spacing={4}>
                <Grid item xs={12} pb={4}>
                    <Grid container justifyContent='center'>
                        <Grid item display={{ sm: 'none', md: 'block' }} md={12} lg={8} xl={8} alignItems='center'>
                            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                                {/* <Stack spacing={2} justifyContent='center'> */}

                                <ContosoLogo height='100px' width='478px' style={{ width: 'inherit', height: 'inherit' }} />
                                {/* <Typography variant='h5' align='center' component='div' mb='26px' gutterBottom>
                                        Developer Portal
                                    </Typography>
                                </Stack> */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={8} xl={8}>
                            <Box sx={{ p: 4 }}>

                                <Paper component='form'
                                    sx={{
                                        borderRadius: '25px',
                                        p: theme.spacing(1, 2),
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                    <IconButton type='submit' sx={{ p: theme.spacing(1) }} aria-label='search'>
                                        <SearchIcon />
                                    </IconButton>
                                    <InputBase placeholder='Search'
                                        sx={{
                                            lineHeight: '1',
                                            // px: theme.spacing(2),
                                            ml: 1,
                                            flex: 1
                                        }}
                                        value={filter}
                                        onChange={handleSearchChange}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    {filter && filter.length > 0 && (
                                        <IconButton type='reset' sx={{ p: theme.spacing(1) }} aria-label='reset'
                                            onClick={() => setFilter('')}>
                                            <ClearIcon />
                                        </IconButton>
                                    )}
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={4} justifyContent='center'>
                        <Grid item xs={12} xl={8} justifyContent='center'>
                            <ProjectsCard />
                        </Grid>
                        <Grid item xs={12} xl={4}>
                            {/* <Box sx={{ p: { sm: 2 }, display: 'flex', justifyContent: 'center' }} > */}
                            <ToolkitCard />
                            {/* </Box> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}