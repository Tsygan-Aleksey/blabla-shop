import { createSlice} from "@reduxjs/toolkit";



export const { actions, reducer } = createSlice({
    name: "registration",
    initialState: {
        isAuth: false,
    },
    reducers: {
        checkAuth: () => {
            return {
                isAuth: true,
            };
        },
    },
});