import { createSlice } from "@reduxjs/toolkit";

const CatogarySlice = createSlice({
    name: "catogary",
    initialState: {
        catogary: "All"
    },
    reducers: {
        setCatogary: (state, action) => {
            state.catogary = action.payload;
        }
    },
});

export const { setCatogary } = CatogarySlice.actions;
export default CatogarySlice.reducer;