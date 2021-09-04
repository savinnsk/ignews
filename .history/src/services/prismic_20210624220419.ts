import Prismic from '@prismicio/client';

export function getPrismicClient(){
    const primic = Prismic.client(
        process.env.PRIMIC_ACCESS_TOKEN,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )
}