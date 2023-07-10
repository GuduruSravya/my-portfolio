import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    
    projectId:"dflh7n7l",
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:"skWp2UkXMHzK4LRW3d91vEqDwDjHCnhTLgcSAu0BFCH6HQ7nwHpYseDXwcX50hhdTK8k2iV1IeBcowsNXJOqSMMz1Z5xNTLx4y4BwrVgB84xh26kDBjgCnJ3UAtW45Bi73JWghfMEEKTZM3AmlPLYowrbRWyibyA7OBp2Y9cKQiLJMUY2t5r"
})

const builder = imageUrlBuilder(client);


export const urlFor=(source) => builder.image(source);