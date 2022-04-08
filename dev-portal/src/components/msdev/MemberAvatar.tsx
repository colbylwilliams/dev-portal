// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Avatar from '@mui/material/Avatar';
import { SxProps, Theme } from '@mui/material/styles';
import { GraphUser } from '../../model/GraphUser';

import colby from '../../img/colby.jpeg'
import claude from '../../img/claude.jpeg'
import markus from '../../img/markus.jpeg'
import kayla from '../../img/kayla.jpeg'
import nicole from '../../img/nicole.jpeg'
import jay from '../../img/jay.jpeg'


export interface IMemberAvatarProps {
    user?: GraphUser;
    sx?: SxProps<Theme>;
}

const memberInitials = (user?: GraphUser) => {
    if (!user) return undefined;
    return user.givenName && user.surname ? user.givenName.substring(0, 1) + user.surname.substring(0, 1) : user.displayName?.substring(0, 2);
};

const getImageUrl = (user?: GraphUser) => {
    switch ((user?.givenName ?? user?.displayName)?.toLowerCase()) {
        case 'colby': return colby;
        case 'claude': return claude;
        case 'markus': return markus;
        case 'kayla': return kayla;
        case 'nicole': return nicole;
        case 'jay': return jay;
        default: return undefined;
    }
};

export const MemberAvatar: React.FC<IMemberAvatarProps> = (props) => {

    const { user, sx } = props;

    return (
        <Avatar alt={user?.displayName} src={getImageUrl(user)} sx={sx}>
            {memberInitials(user)}
        </Avatar>
    );
}