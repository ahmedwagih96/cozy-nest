"use client";
import { hotelFacilities } from "@/constants/hotelOptions";
import { HotelFormData } from "@/types/typings";
import { useFormContext } from "react-hook-form";

const FacilitiesInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {hotelFacilities.map((facility) => (
          <label className="text-sm flex gap-1 text-gray-700" key={facility}>
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities ? (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      ) : null}
    </div>
  );
};

export default FacilitiesInput;
