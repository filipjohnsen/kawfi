import { client, urlBuilder } from '@/lib/sanity-client';
import { Place } from '@/lib/types';
import Image from 'next/image';

const PlacePage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const place = await client.fetch<Place>(
    `*[_type == "place" && _id == "${params.id}"]{_id, name, name, adress, image}[0]`
  );
  return (
    <div className="mx-auto grid max-w-[900px] grid-cols-[40%_60%] items-center gap-12">
      <div>
        <h1 className="text-[30px] font-semibold">{place.name}</h1>
      </div>
      <div>
        <Image
          src={urlBuilder(place.image).width(1120).height(630).url()}
          alt=""
          width={1120}
          height={630}
        />
      </div>
    </div>
  );
};

export default PlacePage;
