import { createSlice } from "@reduxjs/toolkit";

const InitialValue = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { name: "", role: "", email: "", password: "" },
};

export const UserSlice = createSlice({
  name: 'user',
  initialState: InitialValue,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    removeUser: (state) => {
      localStorage.removeItem('user');
      state.user = { name: "", role: "", email: "", password: "" };
    },
    updateUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    }
  }
});

export const { setUser, removeUser, updateUser } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
