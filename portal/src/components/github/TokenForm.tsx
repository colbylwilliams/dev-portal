// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import GitHub from '@mui/icons-material/GitHub';
import HighlightOff from '@mui/icons-material/HighlightOff';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useToken } from '../../hooks/github/useToken';

export interface ITokenFormProps {

}

const tokenKey = 'MSDEV:GITHUB_TOKEN';
export const TokenForm: React.FC<ITokenFormProps> = (props) => {

    const queryClient = useQueryClient();

    const { data: token } = useToken();

    // const setToken = useSetToken();

    const [githubToken, setGithubToken] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        if (token) {
            setGithubToken(token);
        } else {
            setGithubToken('');
        }
    }, [token]);

    const clearToken = () => {
        localStorage.removeItem(tokenKey);

        queryClient.invalidateQueries(['demo', 'github', 'token']);
    };

    const saveToken = () => {
        if (githubToken === token) {
            console.log('na');
            return;
        }

        if (githubToken) {
            localStorage.setItem(tokenKey, githubToken);
        } else {
            localStorage.removeItem(tokenKey);
        }

        queryClient.invalidateQueries(['demo', 'github', 'token']);
    };

    return (
        <Box
            component='form'
            // sx={{
            //     '& .MuiTextField-root': { m: 1, width: '25ch' },
            // }}
            noValidate
            autoComplete='off'>
            <Stack>

                <FormControl sx={{ m: 1, width: '50ch' }} variant='outlined'>
                    <InputLabel htmlFor='outlined-adornment-password'>PAT</InputLabel>
                    <OutlinedInput
                        id='outlined-adornment-password'
                        label='PAT'
                        type={passwordVisible ? 'text' : 'password'}
                        value={githubToken}
                        onChange={e => setGithubToken(e.target.value)}
                        startAdornment={
                            <InputAdornment position='start'>
                                <GitHub />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    onMouseDown={e => e.preventDefault()}
                                    edge='end'>
                                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>GitHub <Link target='_blank' rel='noopener noreferrer' href='https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'>personal access token</Link></FormHelperText>
                </FormControl>
                <Stack direction='row' justifyContent='flex-end'>
                    <Button color='inherit' variant='outlined' sx={{ m: 1 }}
                        disabled={!token}
                        startIcon={<HighlightOff />} onClick={() => clearToken()}>Clear</Button>

                    <Button color='inherit' variant='outlined' sx={{ m: 1 }}
                        disabled={!githubToken || token === githubToken}
                        startIcon={<RocketLaunch />} onClick={() => saveToken()}>Save</Button>
                </Stack>
            </Stack>
        </Box>
    );
};