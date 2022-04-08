// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Contributor } from '../../model/github';
import { ContributorsTooltip } from './ContributorTooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(Tooltip)(theme => ({
    tooltip: {
        backgroundColor: 'white',
        border: '1px solid lightgray',
        color: '#333',
        minWidth: '320px',
    }
}));

export interface IContributorAvatarProps {
    contributor: Contributor;
}

export const ContributorAvatar: React.FC<IContributorAvatarProps> = (props) => {

    const { contributor } = props

    return (
        <LightTooltip
            title={<ContributorsTooltip contributor={contributor} />}>

            <Avatar
                key={contributor.login}
                alt={contributor.login}
                src={contributor.avatar_url}
            />
        </LightTooltip>
    );
}