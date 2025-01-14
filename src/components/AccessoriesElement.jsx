import React from "react";
import Frame from "./Frame";
import ImageDistributor from "./ImageDistributor";
import lampImages from "../Addonimages";

export default function AccessoriesElement() {
  return (
    <div className="w-[100%] mt-2">
      <h1 className="text-2xl p-2 uppercase mb-4">Addons</h1>
      <div className="flex flex-wrap justify-evenly">
        <Frame />
      </div>
      <div>
        <ImageDistributor imagefile={lampImages}/>        
      </div>
    </div>
  );
}
