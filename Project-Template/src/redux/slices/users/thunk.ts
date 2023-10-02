import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const example = createAsyncThunk<void, string>('@auth/example', 
async (param, { dispatch }) => {
    const { data, status } = await axios.post('/endpoint');
    if (status === 200) dispatch(data);
});