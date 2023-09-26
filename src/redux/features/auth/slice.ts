import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILoginResponse, IUser} from "@/types/auth.type";

export interface IAuthSlice{
    isAuthenticated: boolean;
    token?: ILoginResponse;
    user?: IUser;
}

const initialState: IAuthSlice =  {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<ILoginResponse>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = undefined;
            state.user = undefined;
            sessionStorage.clear();
        },
        setUserDetails: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;