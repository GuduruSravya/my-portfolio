import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    
    projectId:"dflh7n7l",
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN_ID
})

const builder = imageUrlBuilder(client);


export const urlFor=(source) => builder.image(source);