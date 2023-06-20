import { PlaceReview } from '@/components/place-review';
import { client, urlBuilder } from '@/lib/sanity-client';
import { Place } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const Home = async () => {
  const places = await client.fetch<Place[]>(
    `*[_type == "place"]{_id, name, name, adress, image}|order(name asc)`
  );
  return (
    <main className="mx-auto max-w-[600px] bg-[#14333a] px-4 text-white">
      <div className="grid gap-6 py-8">
        {places.map((place) => (
          <Link
            className="relative overflow-hidden rounded-3xl shadow-md"
            href={`/place/${place._id}`}
            key={place._id}
          >
            <Image
              src={urlBuilder(place.image).width(600).height(300).url()}
              width={600}
              height={300}
              alt=""
              className="rounded-md shadow-md"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#225560] to-transparent"></div>
            <div className="absolute inset-0 z-20 flex items-end px-6 pb-4">
              <div className="flex w-full items-center justify-between">
                <div>
                  <h2 className="text-[24px] font-semibold">{place.name}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
