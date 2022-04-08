// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { GraphUser } from '../../model/GraphUser';
import { MemberAvatar } from './MemberAvatar';

export interface IMemberDetailsProps {
    user: GraphUser;
    signout?: boolean;
}

export const MemberDetails: React.FC<IMemberDetailsProps> = (props) => {

    const { user, signout } = props;

    const theme = useTheme();

    return (
        <Stack p={3} alignItems='center' direction='row'>
            <MemberAvatar user={user} sx={{ m: theme.spacing(2), width: 96, height: 96 }} />
            <Stack direction='column' p={theme.spacing(2, 3)} >
                <Typography variant='h6' component='div'>
                    {user.displayName}
                </Typography>
                <Typography variant='body2' color={theme.palette.text.secondary} gutterBottom component='div'>
                    {user.jobTitle}
                </Typography>
                <Typography variant='body2' color={theme.palette.text.secondary} gutterBottom component='div'>
                    {user.department}
                </Typography>
                {signout && (
                    <Button sx={{ pl: 0, justifyContent: 'flex-start' }} size="small">Sign out</Button>
                )}
            </Stack>
        </Stack>
    );
}