import usersSlice from "./usersSlice.js"
import loaderSlice from "./loaderSlice.js"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        users:usersSlice,
        loader:loaderSlice
    }
});

export default store