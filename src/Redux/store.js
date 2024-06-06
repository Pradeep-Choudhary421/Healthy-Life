import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./Features/alertSlice";
import { userSlice } from "./Features/userSlice";

export default configureStore({
  reducer: {
    alert: alertSlice.reducer,
    user: userSlice.reducer,
  },
});
