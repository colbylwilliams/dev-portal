// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import LinearProgress from '@mui/material/LinearProgress';
import { useContributors } from '../../hooks/github';
import { ContributorsList } from './ContributorsList';
import Divider from '@mui/material/Divider';

export interface IContributorsCardProps {
    org: string;
    repo: string;
}

export const ContributorsCard: React.FunctionComponent<IContributorsCardProps> = (props) => {

    const { org, repo } = props;

    const { data: contributors, isLoading } = useContributors(org, repo);

    if (isLoading) {
        return <LinearProgress />;
    }

    return (
        <Card>
            <CardHeader title='Contributors' />
            <Divider />
            <CardContent>
                <ContributorsList contributors={contributors || []} />
            </CardContent>
        </Card>
    );
}