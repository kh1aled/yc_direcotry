// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({ 
  serverToken: process.env.SANITY_WRTIE_TOKEN, // استخدم متغير بيئي لحماية التوكن
  browserToken: process.env.NEXT_PUBLIC_SANITY_BROWSER_TOKEN, // يجب أن يكون متاحًا للمتصفح
  client: client.withConfig({ 
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX',
  }) 
});

