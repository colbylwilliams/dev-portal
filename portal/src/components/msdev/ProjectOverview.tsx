// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Grid from '@mui/material/Grid';
import React from 'react';
import { ReadmeCard } from '../github/ReadmeCard';
import { ReleasesCard } from '../github/ReleasesCard';
import { SettingsCheck } from '../SettingsCheck';
import { MembersCard } from './MembersCard';
import { ToolkitCard } from './ToolkitCard';

export interface IProjectOverviewProps {
    org: string;
    repo: string;

}

export const ProjectOverview: React.FC<IProjectOverviewProps> = (props) => {

    const { org, repo } = props;

    return (
        <SettingsCheck github>

            <Grid container spacing={4}>
                <Grid item xs={12} xl={8}>
                    {/* <Grid container spacing={4}>
                    <Grid item xs={12}> */}
                    <ReadmeCard org={org} repo={repo} />
                    {/* </Grid>
                </Grid> */}
                </Grid>
                <Grid item xs={12} xl={4}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                            <MembersCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                            <ToolkitCard project />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                            <ReleasesCard org={org} repo={repo} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </SettingsCheck>
    );
};