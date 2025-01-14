import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDimensionInInches, setGodDetails } from '../Slice/godPhotoFrameSlice';

export default function DimensionModel({ setModal }) {
    const dispatch = useDispatch();
    const dimension = useSelector((state) => state.godPhotoFrame.dimension);
    const godDetails = useSelector((state) => state.godPhotoFrame.godDetails);

    const [formData, setFormData] = useState({
        width: dimension.widthInInches || 10,
        height: dimension.heightInInches || 20,
        godCount: godDetails.godCount || 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            setDimensionInInches({
                width: parseFloat(formData.width) || dimension.widthInInches,
                height: parseFloat(formData.height) || dimension.heightInInches,
            })
        );

        dispatch(
            setGodDetails({
                godCount: parseInt(formData.godCount, 10) || godDetails.godCount,
            })
        );

        setModal(false);
    };

    return (
        <div className="absolute mt-2 z-50 top-16 w-[100%] bg-white rounded-lg">
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-2">
                    <div className="flex gap-2">
                        <label className="w-24">Width</label>
                        <input
                            type="number"
                            name="width"
                            value={formData.width}
                            onChange={handleChange}
                            className="bg-gray-300 h-7 rounded-md px-1"
                        />
                    </div>
                    <div className="flex gap-2">
                        <label className="w-24">Height</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="bg-gray-300 h-7 rounded-md px-1"
                        />
                    </div>
                    <div className="flex gap-2">
                        <label className="w-24">Gods</label>
                        <input
                            type="number"
                            name="godCount"
                            value={formData.godCount}
                            onChange={handleChange}
                            className="bg-gray-300 h-7 rounded-md px-1"
                        />
                    </div>
                    <button className="w-full bg-green-600 py-2 rounded-md text-white" type="submit">
                        Confirm
                    </button>
                    <button
                        className="w-full bg-red-600 py-2 rounded-md text-white"
                        onClick={() => setModal(false)}
                        type="button"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}
