// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationOn from '@mui/icons-material/LocationOn';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useUser } from '../../hooks/github/useUser';
import { Contributor } from '../../model/github';
import Divider from '@mui/material/Divider';

export interface IContributorsTooltipProps {
    contributor: Contributor;
}

export const ContributorsTooltip: React.FunctionComponent<IContributorsTooltipProps> = (props) => {

    const hostname = 'https://github.com';

    const { data: user, isLoading } = useUser(props.contributor.login);

    if (isLoading || user === undefined) {
        return <LinearProgress />;
    }

    return (
        <Grid container spacing={4} p='4px'>
            <Grid item xs={12} sm={2}>
                <Avatar
                    key={user.login}
                    alt={user.login}
                    src={user.avatar_url}
                />
            </Grid>
            <Grid item xs={12} sm={10}>
                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <Typography variant="h6">
                            <Link
                                href={`//${hostname}/${user.login}`}
                                color="inherit"
                                target="_blank"
                                rel="noopener noreferrer">
                                {user.name ?? user.login}
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <Box component="span" ml={2}> */}
                        <Typography variant="caption">@{user.login}</Typography>
                        {/* </Box> */}
                    </Grid>
                    {user.bio && (
                        <Grid item xs={12}>
                            <Typography variant="subtitle2">{user.bio}</Typography>
                        </Grid>
                    )}
                    {user.location && (
                        <Grid item xs={12}>
                            <Box my={2}>
                                <Divider />
                            </Box>
                            <Typography variant="caption">
                                <LocationOn fontSize="inherit" /> {user.location}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}