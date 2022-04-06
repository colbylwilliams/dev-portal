// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import LocalOfferOutlined from '@mui/icons-material/LocalOfferOutlined';
import { useReleases } from '../../hooks/github';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface IReleasesCardProps {
    org: string;
    repo: string;
}

export const ReleasesCard: React.FunctionComponent<IReleasesCardProps> = (props) => {

    const { org, repo } = props;

    const { data: releases, isLoading } = useReleases(org, repo);

    if (isLoading) {
        return <LinearProgress />;
    }

    return releases?.length ? (
        <Card>
            <CardHeader title='Releases' />
            <Divider />
            <CardContent>
                <List>
                    {releases.map(release => (
                        <ListItem sx={{ alignItems: 'baseline', justifyContent: 'space-between' }} key={release.id}>
                            <Stack direction='row' spacing={2} alignItems='baseline' justifyContent='space-between'>
                                {release.published_at && (
                                    <Typography variant='body2' component='span' color='textSecondary'>
                                        {new Date(release.published_at).toLocaleDateString()}
                                    </Typography>
                                )}
                                <Link href={release.html_url} color="inherit" target="_blank" rel="noopener noreferrer"
                                    sx={{
                                        textDecoration: 'none',
                                        fontSize: '1.1rem',
                                        fontWeight: 800,
                                        minWidth: '80px',
                                    }}>
                                    {release.name}
                                </Link>

                                {release.prerelease && (
                                    <Chip color="primary" size="small" label="Pre-release" />
                                )}

                            </Stack>
                            <Link href={release.html_url} color="inherit" target="_blank" rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    minWidth: '70px',
                                }}>
                                <LocalOfferOutlined fontSize="inherit" sx={{ verticalAlign: 'middle' }} />
                                {' '}
                                {release.tag_name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    ) : (
        <></>
    );
}