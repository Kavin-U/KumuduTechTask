import { BsArrowsAngleExpand } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { FiUsers,FiLayers } from "react-icons/fi";
import { useState } from "react";
import Dimension from "./Dimension";
import FrameElement from "./FrameElement";
import GodElement from "./GodElement";
import AccessoriesElement from "./AccessoriesElement";


export default function Createframe() {
  const [dimesionElement, SetDimensionElement] = useState(true);
  const [frameElement, SetFrameElement] = useState(false);
  const [godElement, SetGodElement] = useState(false);
  const [accessories, SetAcceesories] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="p-3 w-[150px] min-h-full bg-gray-400 flex flex-col gap-8">
          <div className="text-center">
            <button
              onClick={() => {
                SetDimensionElement(true);
                SetFrameElement(false);
                SetGodElement(false);
                SetAcceesories(false);
              }}
              className={`w-fit p-2 rounded-md mx-auto hover:bg-violet-800 hover:text-white ${dimesionElement? 'bg-violet-800 text-white' : 'bg-white text-black'  }`}
            >
              <BsArrowsAngleExpand />
            </button>
            <p>Dimensions</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                SetDimensionElement(false);
                SetFrameElement(true);
                SetGodElement(false);
                SetAcceesories(false);
              }}
              className={`w-fit p-2 rounded-md mx-auto hover:bg-violet-800 hover:text-white ${frameElement? 'bg-violet-800 text-white' : 'bg-white text-black'  }`}
            >
              <MdOutlineWeb />
            </button>
            <p>Frame</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                SetDimensionElement(false);
                SetFrameElement(false);
                SetGodElement(true);
                SetAcceesories(false);
              }}
              className={`w-fit p-2 rounded-md mx-auto hover:bg-violet-800 hover:text-white ${godElement? 'bg-violet-800 text-white' : 'bg-white text-black'  }`}
            >
              <FiUsers />
            </button>
            <p className="">Gods</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                SetDimensionElement(false);
                SetFrameElement(false);
                SetGodElement(false);
                SetAcceesories(true);
              }}
              className={`w-fit p-2 rounded-md mx-auto hover:bg-violet-800 hover:text-white ${accessories? 'bg-violet-800 text-white' : 'bg-white text-black'  }`}
            >
              <FiLayers />
            </button>
            <p>Accessories</p>
          </div>
        </div>
        <div className="mt-2 w-[100%]">
          { dimesionElement && <Dimension />}
          { frameElement && <FrameElement/>}
          { godElement && <GodElement/>}
          { accessories && <AccessoriesElement/>}
        </div>
      </div>
    </>
  );
}
