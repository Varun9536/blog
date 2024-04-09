import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : false
}

export const authSlice = createSlice({
    name : "blog",
    initialState ,

    reducers : {
        login : (state , action)=>
        {
            state.isLogin = true
        } ,

        logout : (state , action)=>
        {
            state.isLogin = false
        }
    }
})
export const{login , logout} = authSlice.actions
export default authSlice.reducer
