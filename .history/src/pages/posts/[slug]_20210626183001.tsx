import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import { Head } from "next/head"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"


interface PostProps {

    post:{
        slug : String ,
        title : String ,
        content : String ,
        updatedAt : String,
    }
}

export default function Post ({post} : PostProps ) {

    return (
        <Head></Head>
    )
}


export const getServerSideProps : GetServerSideProps = async ({req , params}) => {
    const session = await getSession({req})


    const {slug} = params ;

    const prismic = getPrismicClient(req) 


    const response = await prismic.getByUID('publication', String(slug) , {})

    const post = {
        slug,
        title : RichText.asText(response.data.title),
        content : RichText.asHtml(response.data.content),
        updatedAt : new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day: '2-digit',
            month:'long',
            year : 'numeric'
    })};


    return {
        props:{
            post,
        }
    }


}