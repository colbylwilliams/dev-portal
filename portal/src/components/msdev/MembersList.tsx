// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState } from 'react';
import { useProjectMembers } from '../../hooks';
import { GraphUser } from '../../model';
import { isPrincipalUser } from '../../MSGraph';
import { MemberAvatar } from './MemberAvatar';
import { MemberDetails } from './MemberDetails';

export interface IMembersListProps {

}

export const MembersList: React.FC<IMembersListProps> = (props) => {

    const { data: members } = useProjectMembers();

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
            <Grid container spacing={1} justifyContent='flex-start'>
                {users?.map((user, index) => (
                    <Grid item key={index}>

                        <IconButton onClick={(e) => handlePopoverClick(e, user)} sx={{ p: 0 }}>
                            <MemberAvatar user={user} />
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
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
        <Grid container spacing={1} justifyContent='flex-start'>
            {[...Array(5)].map((_, index) => (
                <Grid item key={index}>
                    <Skeleton variant='circular' width={44} height={44} animation='wave' />
                </Grid>
            ))}
        </Grid>
    );
};