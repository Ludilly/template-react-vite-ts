import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "./slice";

// Suponhamos que o nome da chave no seu estado onde você deseja armazenar o valor seja "signed".
const setSigned: CaseReducer<AuthSlice, PayloadAction<boolean>> = (state, { payload }) => {
    // Aqui você deve atualizar o estado com o valor do payload.
    state.signed = payload;
};

export default setSigned;