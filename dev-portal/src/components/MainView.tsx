// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export interface IMainViewProps {
    main?: boolean;
    title?: string;
}

export const MainView: React.FC<IMainViewProps> = (props) => {

    const { main, title, children } = props;

    return main ? (
        <Box component='main' sx={{ flexGrow: 1, px: 6, pb: 6, pt: 4 }}>
            <Toolbar />
            {title && <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>{title}</Typography>}
            {children}
        </Box>
    ) : (
        <Box>
            <Toolbar />
            {title && <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>{title}</Typography>}
            {children}
        </Box>
    );
}