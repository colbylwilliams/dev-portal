// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import OpenInNew from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/github/useToken';

export interface ISettingsCheckProps {

    github?: boolean;
}

export const SettingsCheck: React.FC<ISettingsCheckProps> = (props) => {

    const { github } = props;
    const { data: token } = useToken();

    const navigate = useNavigate();


    return github && !token ? (
        <Box sx={{ display: 'flex', minHeight: '300px', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
                <Typography variant="h6">
                    This page requires a GitHub token.
                </Typography>
                <Button variant='text' startIcon={<OpenInNew />}
                    onClick={() => navigate(`/orgs/contoso/projects/settings`)}>Open settings</Button>
            </Stack>
        </Box>
    ) : <>{props.children}</>;
};