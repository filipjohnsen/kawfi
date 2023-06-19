import { createClient } from 'next-sanity'
import imageUrl from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2021-03-25',
});

export const urlBuilder = (source: SanityImageSource) => imageUrl(client).image(source)
