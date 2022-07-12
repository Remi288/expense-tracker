import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : [],
    transaction: [],
}

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            // TODO
        }
    }
});


export const { addCategory } = expenseSlice.actions;
export default expenseSlice.reducer;