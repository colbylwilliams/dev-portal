// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import Grid from '@mui/material/Grid';
import { Contributor } from '../../model/github';
import { ContributorAvatar } from './ContributorAvatar';

export interface IContributorsListProps {
    contributors: Contributor[];
}

export const ContributorsList: React.FC<IContributorsListProps> = (props) => {

    const { contributors } = props;

    return (
        <Grid container spacing={1} justifyContent='flex-start'>
            {contributors.map(contributor => (
                <Grid item key={contributor.login}>
                    <ContributorAvatar contributor={contributor} />
                </Grid>
            ))}
        </Grid>
    );
};