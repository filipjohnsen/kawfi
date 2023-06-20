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
            <div className="absolute inset-0 z-20 flex items-end px-6 pb-2">
              <div className="flex w-full items-center justify-between">
                <div>
                  <h2 className="text-[18px]/6 font-medium">{place.name}</h2>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-full border bg-[#225560] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
