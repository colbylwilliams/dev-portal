// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useQuery, useQueryClient } from 'react-query';

const tokenKey = 'MSDEV:GITHUB_TOKEN';

export const useToken = () => {

    return useQuery(['demo', 'github', 'token'], () => localStorage.getItem(tokenKey), {
        // enabled: !!username && !!token
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 30, // 30 minutes
    });
};

export const useSetToken = (token?: string | null) => {

    const queryClient = useQueryClient();

    if (token) {
        localStorage.setItem(tokenKey, token);
    } else {
        localStorage.removeItem(tokenKey);
    }

    queryClient.invalidateQueries(['demo', 'github', 'token']);

    // if (token) {
    //     queryClient.setQueryData(['demo', 'github', 'token'], token);
    // }
};
