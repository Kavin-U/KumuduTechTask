import { configureStore } from "@reduxjs/toolkit";
import godPhotoFrameReducer from "../Slice/godPhotoFrameSlice.js";

export const store = configureStore({
    reducer: {
        godPhotoFrame: godPhotoFrameReducer,
    },
});


