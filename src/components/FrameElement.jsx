import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Frame from "./Frame";
import frameimg from "../frameImages.js";
import { setFramePicture } from "../Slice/godPhotoFrameSlice.js";

export default function FrameElement() {
  const [selectedFrame, setSelectedFrame] = useState({ key: "" });
  const dispatch = useDispatch();

  const handleClick = (key) => {
    setSelectedFrame({ key });
    dispatch(
      setFramePicture({
        key: key,
      })
    );
  };

  return (
    <div className="w-[100%] mt-2">
      <h1 className="text-2xl p-2 uppercase mb-4">Frame Type</h1>
      <div className="flex flex-wrap justify-evenly">
        <Frame />
      </div>
      <div className="p-2 w-full mt-4 bg-white flex justify-center">
        <div className="flex bg-white py-5 w-fit justify-center gap-5">
          <button
            key={''}
            onClick={() => handleClick('')}
            className={`flex items-center text-center`}
          >
            {/* <img src={frameimg[key]} alt="frame-img" className="w-28 h-32" /> */}
            <p className="w-full text-center">No Frame</p>
          </button>
          {Object.keys(frameimg).map((key) => {
            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`flex flex-col text-center ${
                  selectedFrame.key === key
                    ? "border-2 bg-blue-500 rounded-md border-blue-500"
                    : ""
                }`}
              >
                <img
                  src={frameimg[key]}
                  alt="frame-img"
                  className="w-28 h-32"
                />
                <p className="w-full text-center">{key}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Display selected frame
      {selectedFrame.key && (
        <div className="mt-4 w-full bg-gray-300">
          <p>
            <strong>Selected Frame Key:</strong> {selectedFrame.key}
          </p>
          <p>
            <strong>Selected Frame Value:</strong>{" "}
            <img src={frameimg[selectedFrame.key]} alt="Selected Frame" className="w-20 h-20" />
          </p>
        </div>
      )} */}
    </div>
  );
}
