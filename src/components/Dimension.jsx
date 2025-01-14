import React, { useState } from "react";
import Frame from "./Frame";
import { MdOutlineEdit } from "react-icons/md";
import DimensionModel from "./DimensionModel";
import { useSelector } from 'react-redux';

export default function Dimension() {

    const dimension = useSelector((state) => state.godPhotoFrame.dimension);
    const godDetails = useSelector((state) => state.godPhotoFrame.godDetails);
    const [modal, setModal] = useState(false);
    // console.log(modal);
    
  return (
    <div className="w-[100%] h-screen mt-2">
      <h1 className="text-2xl p-2 uppercase mb-4">Frame Dimension</h1>
      <div className="flex flex-wrap ml-8 mt-10 justify-evenly">
        <Frame />
        <div className="relative">
        <div onClick={()=>{setModal(true)}} className="cursor-pointer w-fit h-fit">
          <div className="bg-white flex p-2 gap-2 rounded-md">
            <div>
              <p className="bg-gray-300 rounded-t-lg p-1 text-sm h-6">Frame</p>
              <input type="text" value={dimension.widthInInches+' x '+dimension.heightInInches+' Inches'} className="bg-gray-300 w-32 h-6 rounded-b-lg p-1" disabled/>
            </div>
            <div>
              <p className="bg-gray-300 rounded-t-lg p-1 text-sm h-6">No.of.Gods</p>
              <input type="number" value={godDetails.godCount} className="bg-gray-300 w-28 h-6 rounded-b-lg p-1" disabled/>
            </div>
            <MdOutlineEdit className="text-2xl"/>
          </div>        
          </div>
          {modal && <DimensionModel setModal={setModal}/>}
        </div>
      </div>
    </div>
  );
}
