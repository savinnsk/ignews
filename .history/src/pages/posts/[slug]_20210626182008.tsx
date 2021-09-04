import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import { getPrismicClient } from "../../services/prismic"

export default function Post () {

    return (
        <h1>teste</h1>
    )
}


export const getServerSideProps : GetServerSideProps = async ({req , params}) => {
    const session = await getSession({req})


    const {slug} = params ;

    const prismic = getPrismicClient(req) 


    const response = await prismic.getByUID('publication', String(slug) , {})
}