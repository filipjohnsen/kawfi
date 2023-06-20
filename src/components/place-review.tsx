import { client } from '@/lib/sanity-client';

export const PlaceReview = async ({ _id }: { _id: string }) => {
  const reviews = await client.fetch<any[]>(`*[_type == "review" && place._ref == "${_id}"]`);
  return <div className="text-[16px]">{reviews.length}</div>;
};
