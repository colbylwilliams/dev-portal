// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Grid from '@mui/material/Grid';
import React from 'react';
import { ContributorsCard } from './ContributorsCard';
import { LanguageCard } from './LanguageCard';
import { ReadmeCard } from './ReadmeCard';
import { ReleasesCard } from './ReleasesCard';


export interface IRepoViewProps {
    org: string;
    repo: string;
}

export const RepoView: React.FC<IRepoViewProps> = (props) => {

    const { org, repo } = props;

    return (
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
                        <LanguageCard org={org} repo={repo} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                        <ContributorsCard org={org} repo={repo} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                        <ReleasesCard org={org} repo={repo} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
};