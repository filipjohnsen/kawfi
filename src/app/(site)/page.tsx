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
    <div className="px-4">
      <main className="mx-auto max-w-[900px]">
        <div className="grid gap-6 pt-12">
          {places.map((place) => (
            <Link href={`/place/${place._id}`} key={place._id}>
              <Image
                src={urlBuilder(place.image).width(1000).height(500).url()}
                width={500}
                height={250}
                alt=""
                className="rounded-md shadow-md"
              />
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-semibold">{place.name}</h2>
                  <span className="text-[10px] text-slate-800">{place.adress}</span>
                </div>
                <Suspense fallback="Loading...">
                  <PlaceReview _id={place._id} />
                </Suspense>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
