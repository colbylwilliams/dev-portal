// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import React from 'react';
import { MembersList } from './MembersList';

export interface IMembersCardProps {

}

export const MembersCard: React.FC<IMembersCardProps> = (props) => {


    return (
        <Card>
            <CardHeader title='Members' />
            <Divider />
            <CardContent>
                <MembersList />
            </CardContent>
        </Card>
    );
};