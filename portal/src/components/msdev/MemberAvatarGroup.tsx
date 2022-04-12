// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import AvatarGroup from '@mui/material/AvatarGroup';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState } from 'react';
import { useMembersForProject } from '../../hooks';
import { GraphUser } from '../../model/GraphUser';
import { isPrincipalUser } from '../../MSGraph';
import { MemberAvatar } from './MemberAvatar';
import { MemberDetails } from './MemberDetails';

export interface IMemberAvatarGroupProps {
    org: string;
    project: string;
}

export const MemberAvatarGroup: React.FC<IMemberAvatarGroupProps> = (props) => {

    const { org, project } = props;

    const { data: members } = useMembersForProject(org, project);

    const [users, setUsers] = useState<GraphUser[]>([]);
    const [user, setUser] = useState<GraphUser>();

    useEffect(() => {
        if (members) {
            const usrs = members.filter(m => isPrincipalUser(m.graphPrincipal))?.map(m => m.graphPrincipal as GraphUser);
            setUsers(usrs);
        } else {
            setUsers([]);
        }
        setUser(undefined);

    }, [members]);

    const [popoverAnchorEl, setPopoverAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const popoverOpen = Boolean(popoverAnchorEl);

    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>, u: GraphUser) => {
        setUser(u);
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setUser(undefined);
        setPopoverAnchorEl(null);
    };

    return users.length > 0 ? (
        <>
            <AvatarGroup sx={{ paddingLeft: '8px', justifyContent: 'flex-end' }} total={members?.length ?? 0}>
                {users?.map((user, index) => (
                    <IconButton key={index} onClick={(e) => handlePopoverClick(e, user)} sx={{ p: 0 }}>
                        <MemberAvatar user={user} />
                    </IconButton>
                ))}
            </AvatarGroup>
            <Popover
                open={popoverOpen}
                anchorEl={popoverAnchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                {user && <MemberDetails user={user} />}
            </Popover>
        </>
    ) : (
        <AvatarGroup sx={{ paddingLeft: '8px', justifyContent: 'flex-end' }}>
            {[...Array(5)].map((_, index) => (
                <Skeleton key={index} variant="circular" sx={{ ml: '-8px' }} width={44} height={44} animation="wave" />
            ))}
        </AvatarGroup>

    );
};