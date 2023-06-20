import { ReviewInput } from '@/components/review-input';
import { client, urlBuilder } from '@/lib/sanity-client';
import { Place, Review } from '@/lib/types';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import { submitReview } from './action';

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

  const reviews = await client.fetch<Review[]>(
    `*[_type == "review" && place._ref == "${params.id}"]`
  );

  const currentUserReview = reviews.find((review) => review.user === auth().userId);

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
        <div className="absolute inset-0 z-20 flex items-end justify-between px-4 pb-2">
          <h1 className="text-[18px]/6 font-semibold text-white">{place.name}</h1>
          {currentUserReview && (
            <div className="text-white">
              <span className="text-[18px] font-semibold">{currentUserReview.overallRating}</span>
              <span className="text-[12px]">/25</span>
            </div>
          )}
        </div>
      </div>
      <div className="py-4 text-center">
        <form action={submitReview} className="grid gap-8 text-white">
          <input
            name="placeId"
            readOnly
            value={params.id}
            className="invisible h-0 w-0 appearance-none overflow-hidden"
          />
          <ReviewInput
            value={currentUserReview?.coffeeRating ?? 0}
            name="coffeeRating"
            image="/coffee.png"
            label="Coffee"
          />
          <ReviewInput
            value={currentUserReview?.locationRating ?? 0}
            name="locationRating"
            image="/location.png"
            label="Location"
          />
          <ReviewInput
            value={currentUserReview?.atmosphereRating ?? 0}
            name="atmosphereRating"
            image="/atmosphere.png"
            label="Atmosphere"
          />
          <ReviewInput
            value={currentUserReview?.serviceRating ?? 0}
            name="serviceRating"
            image="/service.png"
            label="Service"
          />
          <ReviewInput
            value={currentUserReview?.valueRating ?? 0}
            name="valueRating"
            image="/value.png"
            label="Value"
          />
          <button
            type="submit"
            className="mx-auto w-fit rounded-lg bg-[#225560] px-4 py-1 text-sm font-semibold"
          >
            Place review
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlacePage;
