import { Review } from '@/components/review';
import { client, urlBuilder } from '@/lib/sanity-client';
import { Place } from '@/lib/types';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';

const PlacePage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const userId = auth().userId;

  const place = await client.fetch<Place>(
    `*[_type == "place" && _id == "${params.id}"]{_id, name, name, adress, image}[0]`
  );
  const review = await client.fetch(`*[_type == "review" && place._ref == "${params.id}"]`);

  return (
    <div className="mx-auto grid h-screen max-w-[600px] grid-rows-[auto_1fr] bg-[#14333a]">
      <div className="relative overflow-hidden rounded-b-3xl shadow-lg">
        <Image
          src={urlBuilder(place.image).width(600).height(300).url()}
          width={600}
          height={300}
          alt=""
          className="rounded-b-3xl shadow-md"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#225560] to-transparent"></div>
        <div className="absolute inset-0 z-20 flex items-end px-4 pb-1">
          <h1 className="text-[24px] font-semibold text-white">{place.name}</h1>
        </div>
      </div>
      <div className="py-4 text-center">
        <Review />
      </div>
    </div>
  );
};

export default PlacePage;
