import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { setFramePicture } from "../Slice/godPhotoFrameSlice";
import Godimages from "../godimages.js";
import Frame from "./Frame";

export default function GodElement() {
  const dispatch = useDispatch();

  const handleDragStart = (e, url) => {
    e.dataTransfer.setData("imageUrl", url);
  };

  // const handleFrameClick = (key) => {
  //   dispatch(setFramePicture({ key }));
  // };

  return (
    <div className="w-full mt-2">
      <h1 className="text-2xl p-2 uppercase mb-4">Select God</h1>
      <div className="flex flex-wrap justify-evenly">
        <Frame />
      </div>
      <div className="p-2 w-full mt-4 bg-white flex justify-center">
        <div className="flex bg-white py-5 w-fit items-center justify-center gap-10">
          {Object.keys(Godimages).map((key) => (
            <div
              key={key}
              draggable
              onDragStart={(e) => handleDragStart(e, Godimages[key])}
              className="flex flex-col text-center cursor-pointer"
            >
              <img src={Godimages[key]} alt={key} className="w-32 h-40" />
              <p className="w-full text-center">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
