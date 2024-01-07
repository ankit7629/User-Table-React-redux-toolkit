import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UsersSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
