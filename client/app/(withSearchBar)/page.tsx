import { LatestDestination } from "@/components";
import { searchHotelsService } from "@/services/hotels";

export default async function page() {
  const { hotels } = await searchHotelsService("limit=6");

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <main className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent destinations added by our hosts</p>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {topRowHotels.map((hotel) => (
            <LatestDestination hotel={hotel} key={hotel._id} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowHotels.map((hotel) => (
            <LatestDestination hotel={hotel} key={hotel._id} />
          ))}
        </div>
      </div>
    </main>
  );
}
