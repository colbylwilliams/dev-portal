// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Octokit } from 'octokit';
import { useQuery } from 'react-query';
import { User } from '../../model/github';
import { useToken } from './useToken';

export const useUser = (username?: string) => {

    const { data: token } = useToken();

    return useQuery(['gh-user', username], async () => {

        const { data } = await new Octokit({
            auth: token,
            userAgent: 'TeamCloud'
        }).rest.users.getByUsername({
            username: username!
        });

        console.log(data);

        return data as User;
    }, {
        enabled: !!username && !!token
    });
};
