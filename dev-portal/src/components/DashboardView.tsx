// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useOrg } from '../hooks/teamcloud';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useIssues } from '../hooks/github';
import { ReactComponent as ContosoLogo } from '../img/contoso_logo.svg'
import { ToolkitCard } from './msdev/ToolkitCard';

export interface IDashboardViewProps {

}

export const DashboardView: React.FunctionComponent<IDashboardViewProps> = (props) => {

    const theme = useTheme();

    const { data: issues, isLoading } = useIssues();

    const [filter, setFilter] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setFilter(event.target.value);
    };



    return (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            <Grid container spacing={4} direction='row'>
                <Grid item xs={12}>
                    <Grid container direction='row' justifyContent='center'>
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
                        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
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
                    <Grid container spacing={4} direction='row' justifyContent='center'>

                        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                            <Box sx={{ p: 4 }}>
                                <ToolkitCard />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}