import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown){
    const primic = Prismic.client(
        process.env.PRIMIC_ACCESS_TOKEN,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return primic
}