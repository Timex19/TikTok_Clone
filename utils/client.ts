import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'nq8487wd',
    dataset: 'production',
    apiVersion: '2022-07-07',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});