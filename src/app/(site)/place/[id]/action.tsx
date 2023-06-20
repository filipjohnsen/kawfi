'use server';

import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

export const submitReview = async (formData: FormData) => {
  const [, ...rest] = formData;
  let review = {};
  let place = formData.get('placeId');

  for (const [key, value] of rest) {
    Object.assign(review, {
      [key === 'placeId' ? 'place' : key]:
        key !== 'placeId'
          ? Number(value) + 1
          : {
              _type: 'reference',
              _ref: value,
            },
    });
  }

  let overallRating = 0;

  for (const key in review) {
    if (key === 'place') continue;
    // @ts-ignore
    overallRating += Number(review[key]);
  }

  Object.assign(review, {
    _type: 'review',
    _id: `${place}-${auth().userId}`,
    overallRating,
    user: auth().userId,
  });

  const mutation = [
    {
      createOrReplace: review,
    },
  ];

  await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/production`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: mutation,
      }),
    }
  );

  revalidatePath(`/place/${place}`);
};
