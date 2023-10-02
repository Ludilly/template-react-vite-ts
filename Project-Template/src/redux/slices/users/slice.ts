/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
import Cookies from 'js-cookie';
import reducers from './reducers';

export type AuthSlice = {
    signed: boolean;
    // example2: string;
};

const initialState: AuthSlice = {
    signed: false,
    // example2: '',
};

const authSlice = createSlice({
    name: 'example',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state, action: any) => {
            if (action.payload && action.payload.example && action.payload.signed) {
                const token = Cookies.get('token');
                if (!token) {
                    state.signed = false;
                    return;
                }
            }
        });
    },
});

export default authSlice;