import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGodPicture } from "../Slice/godPhotoFrameSlice";
import frameimg from "../frameImages";
import Cornersimg from "../Cornersimages";

export default function Frame() {
  const dispatch = useDispatch();
  const dimension = useSelector((state) => state.godPhotoFrame.dimension);
  const godDetails = useSelector((state) => state.godPhotoFrame.godDetails);
  const framepic = useSelector((state) => state.godPhotoFrame.framePicture);
  const Corners = useSelector((state) => state.godPhotoFrame.corner);

  const hasBackgroundImage = frameimg[framepic?.key];

  const handleDrop = (event, index) => {
    event.preventDefault();
    const imageUrl = event.dataTransfer.getData("imageUrl");
    dispatch(updateGodPicture({ index, url: imageUrl }));
  };

  return (
    <div className="w-auto mt-4">
      <div className={`relative`}>
        <p className="text-center absolute -top-14 left-[43%]">
          Width <br />
          {dimension.widthInInches} Inches
        </p>
        <p className="text-center absolute top-[43%] -left-20 -rotate-90">
          Height <br />
          {dimension.heightInInches} Inches
        </p>
        <div
          style={{
            width: `${
              dimension.widthInPixels <= 200
                ? 380
                : dimension.widthInPixels + 30
            }px`,
            height: `${
              dimension.widthInPixels <= 200
                ? dimension.heightInPixels + 80
                : dimension.heightInPixels + 30
            }px`,
            backgroundImage: hasBackgroundImage
              ? `url(${frameimg[framepic.key]})`
              : "none",
            backgroundSize: 500,
            backgroundPosition: "center",
            backgroundColor: hasBackgroundImage ? "transparent" : "gray",
            backgroundRepeat: "revert",
          }}
          className="flex items-center"
        >
          <div
            style={{
              width: `${
                dimension.widthInPixels <= 200 ? 250 : dimension.widthInPixels
              }px`,
              height: `${dimension.heightInPixels}px`,
            }}
            className={`bg-black relative flex mx-auto items-center overflow-hidden justify-evenly`}
          >            
          {/* <div className="bg-white absolute left-3 z-50 top-5 w-[50px] -rotate-45 h-[30px]">
              <img src={Cornersimg[Corners.key]} className="object-cover" />
          </div> */}
            <div className="flex w-full -z-0 h-full justify-evenly items-center">
              {Array.from({ length: godDetails.godCount || 1 }).map(
                (_, index) => {
                  const containerWidth =
                    godDetails.widthInPixels > 200
                      ? godDetails.widthInPixels
                      : godDetails.godCount> 1 ? (dimension.widthInPixels -50 )  / (godDetails.godCount + 0.8) : dimension.widthInPixels - 30 ;

                  const containerHeight = 
                    godDetails.heightInPixels > 200
                      ? godDetails.heightInPixels
                      : dimension.heightInPixels -120;

                  return (
                    <div
                      key={index}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, index)}
                      style={{
                        width: `${containerWidth}px`,
                        height: `${containerHeight}px`,
                      }}
                      className="bg-white m-2 z-50 flex justify-center items-center"
                    >
                      {godDetails.godPictures[index] ? (
                        <img
                          src={godDetails.godPictures[index]}
                          alt={`God ${index + 1}`}
                          className="w-full h-full object-fill"
                        />
                      ) : (
                        <p className="text-gray-400">Drop an image here</p>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
