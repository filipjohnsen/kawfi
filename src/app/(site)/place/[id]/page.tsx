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
    <div className="mx-auto grid max-w-[1100px] pt-4">
      <div className="text-center">
        <h1 className="text-[30px] font-semibold">{place.name}</h1>
        <Review />
      </div>
    </div>
  );
};

export default PlacePage;
