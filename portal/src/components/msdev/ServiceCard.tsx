// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';



export interface IServiceCardProps {
    service: {
        url: string,
        label: string,
        alt: string,
        icon: JSX.Element,
        featured: boolean;
    };
}


export const ServiceCard: React.FC<IServiceCardProps> = (props) => {

    const theme = useTheme();

    const { service } = props;

    return (
        <Card sx={{ pb: 2 }} elevation={0}>
            <CardContent sx={{ padding: theme.spacing(0) }}>

                <Stack>
                    <Stack pt={2} px={3} pb={1} alignItems='center' direction='row'>
                        <Box sx={{ width: 120, height: 120, p: 2 }}>
                            {service.icon}
                        </Box>
                        <Stack direction='column' p={theme.spacing(2, 3)} >
                            <Typography variant='h6' component='div'>
                                {service.label}
                            </Typography>
                            <Typography variant='body2' color={theme.palette.text.secondary} gutterBottom component='div'>
                                user.jobTitle
                            </Typography>
                            {/* <Typography variant='body2' color={theme.palette.text.secondary} gutterBottom component='div'>
                        user.department
                    </Typography> */}
                            {/* {signout && (
                        <Button sx={{ pl: 0, justifyContent: 'flex-start' }} size="small">Sign out</Button>
                    )} */}

                            {/* {signout && (
                    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                        <Button sx={{ pl: 0, justifyContent: 'flex-start' }} size="small">Sign out</Button>
                        <IconButton size='small' sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>

                    </Stack>
                )} */}

                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
            <CardActions sx={{}}>
                <Button variant='outlined' sx={{ ml: 5 }} size="small">Add</Button>
            </CardActions>
        </Card>
    );
};