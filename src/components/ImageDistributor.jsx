import React, { useState } from "react";
import Corners from '../Cornersimages';
import { setCornerPicture } from "../Slice/godPhotoFrameSlice.js";

export default function ImageDistributor({ imagefile }) {
  const [selectedFrame, setSelectedFrame] = useState({ key: "" });
  const [corners, setCorners] = useState(false);
  const [lamp, setLamp] = useState(false);

  const handleSwitch = (Switch) => {        
    if (Switch === 'lamps') {
      setLamp(true);
      setCorners(false);
    } else if (Switch === 'corners') {
      setLamp(false);
      setCorners(true);
    }
  };

  const handleClick = (key) => {
    setSelectedFrame({ key });
    dispatch(
      setCornerPicture({
        key: key,
      })
    );
  };

  return (
    <>
      <div className="flex mt-4 pt-2 gap-10 bg-gray-500 justify-center">
        <div className="flex gap-10">
          {/* Wrap the function call in an arrow function */}
          <button className={` ${ lamp ? 'py-3 px-6 rounded-t-lg bg-white' : 'py-3 px-6' } `} onClick={() => handleSwitch('lamps')}>Addons</button>
          <button className={` ${ corners ? 'py-3 px-6 rounded-t-lg bg-white' : 'py-3 px-6' } `} onClick={() => handleSwitch('corners')}>Corners</button>
        </div>
      </div>
      <div className="p-2 w-full bg-white flex justify-center">
        <div className="flex bg-white py-5 w-fit justify-center gap-5">
          {lamp && (
            <>
              <button
                key={""}
                onClick={() => handleClick("")}
                className={`flex items-center text-center`}
              >
                <p className="w-full text-center">No Lamp</p>
              </button>
              {Object.keys(imagefile).map((key) => {
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
                      src={imagefile[key]}
                      alt="frame-img"
                      className="w-28 h-32"
                    />
                    <p className="w-full text-center">{key}</p>
                  </button>
                );
              })}
            </>
          )}
          {corners && (
            <>
              <button
                key={""}
                onClick={() => handleClick("")}
                className={`flex items-center text-center`}
              >
                <p className="w-full text-center">No Corner</p>
              </button>
              {Object.keys(Corners).map((key) => {
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
                      src={Corners[key]}
                      alt="frame-img"
                      className="w-28 h-32"
                    />
                    <p className="w-full text-center">{key}</p>
                  </button>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
