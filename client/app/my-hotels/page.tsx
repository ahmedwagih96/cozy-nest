"use client";
import { useQuery } from "react-query";
import Link from "next/link";
import { MyHotel } from "@/components";
import { useAppContext } from "@/contexts/AppContext";
import { fetchMyHotelsService } from "@/services/myHotels";

const page = () => {
  const { showToast } = useAppContext();
  const { data, isLoading } = useQuery("fetchMyHotels", fetchMyHotelsService, {
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  if (!isLoading && !data?.hotels.length) {
    return <span>You do not have any hotels yet</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          href="/my-hotels/create"
          className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500 rounded-sm"
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {data?.hotels.map((hotel) => (
          <MyHotel hotel={hotel} key={hotel._id} />
        ))}
      </div>
    </div>
  );
};

export default page;