import { createSlice } from "@reduxjs/toolkit";
import God from '../assets/GOD1.jpeg'
import { act } from "react";

const initialState = {
    dimension: {
        widthInInches: 10,
        heightInInches: 20,
        widthInPixels: 10 * 20, // 6 times to get Inches *96
        heightInPixels: 20 * 16, // 6 times to get Inches *96
    },
    framePicture: {
        key:'',
    },
    godDetails: {
        godCount: 1,
        godPictures: [],
        widthInInches: 6,
        heightInInches: 10,
        widthInPixels: 6 * 16,
        heightInPixels: 10 * 16,
    },
    corner: {
        key: '',
    }
};

const godPhotoFrameSlice = createSlice({
    name: "godPhotoFrame",
    initialState,
    reducers: {
        setDimensionInInches(state, action) {
            const { width, height } = action.payload;
            state.dimension.widthInInches = width;
            state.dimension.heightInInches = height;
            state.dimension.widthInPixels = (width * 16); // 6 times to get Inches *96
            state.dimension.heightInPixels = (height * 16); // 6 times to get Inches *96
        },
        setFramePicture(state, action) {
            const {key} = action.payload;
            state.framePicture.key = key;
        },
        setCornerPicture(state, action){
            const {key} = action.payload;
            state.corner.key = key;
        },
        setGodDetails(state, action) {
            const {godCount, width, height} = action.payload;
            state.godDetails.godCount = godCount;
            state.godDetails.widthInInches = width;
            state.godDetails.heightInInches = height;
            state.godDetails.widthInPixels = (width * 16); // 6 times to get Inches *96
            state.godDetails.heightInPixels = (height * 16); // 6 times to get Inches *96
        },
        updateGodPicture(state, action) {
            const { index, url } = action.payload;
            state.godDetails.godPictures[index] = url;
        },
        resetState(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { setCornerPicture, setDimensionInInches, setFramePicture, updateGodPicture, setGodDetails, resetState } = godPhotoFrameSlice.actions;

export default godPhotoFrameSlice.reducer;
