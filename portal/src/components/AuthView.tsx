// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.


import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface IAuthViewProps {

}

export const AuthView: React.FC<IAuthViewProps> = (props) => {

    // let location = useLocation();

    // console.warn('AuthView location:', location);
    // console.warn('AuthView location.search:', location.search);

    const [searchParams, setSearchParams] = useSearchParams();
    const [code, setCode] = useState<string>();



    // const code = searchParams.get('code');

    useEffect(() => {
        if (searchParams) {
            const _code = searchParams.get('code');
            if (_code) {
                setCode(_code);
            }
        }
    }, [searchParams]);

    useEffect(() => {
        const doThing = async () => {
            if (code) {
                console.log('code:', code);
                console.log('code:', JSON.stringify({ code }));

                const response = await fetch('/api/github/oauth/token', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ code }),
                });

                console.log('response:', response);
                const { token } = await response.json();
                console.log('token:', token);
            }
        };
        doThing();
    }, [code]);

    // console.warn('AuthView searchParams:', searchParams);
    // console.warn('AuthView searchParams.get code:', searchParams.get('code'));



    return (
        <></>
    );
};