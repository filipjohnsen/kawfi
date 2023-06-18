import { db } from '@/db';
import { place } from '@/db/schema/place';

const Home = async () => {
  // const places = await db.select().from(place).execute();
  return (
    <div className="px-4">
      <main className="mx-auto max-w-[900px]">
        <div className="grid grid-cols-3 gap-6 pt-12">
          {/* {places.map((place) => (
            <div
              key={place.id}
              className="overflow-hidden rounded-lg border border-purple-400 bg-purple-50 shadow-md shadow-purple-50"
            >
              <img src={place.image} alt={place.name} />
              <div className="flex flex-col gap-4 p-2">
                <div className="flex items-center gap-2">
                  <p className="text-[18px] font-semibold text-purple-800">{place.name}</p>
                  <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                  <p className="text-[12px] text-gray-400">{place.address}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </main>
    </div>
  );
};

export default Home;
