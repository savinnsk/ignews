import { GetStaticProps } from "next"
import { getSession } from "next-auth/client"
import  Head  from "next/head"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../../services/prismic"

import styles from '../post.module.scss'

interface PostPreviewProps {

    post:{
        slug : String ,
        title : String ,
        content : string ,
        updatedAt : String,
    }
}

export default function PostPreview ({post} : PostPreviewProps ) {

    return (
        <>
        <Head>
            <title>{post.title} | Ignews</title>
        </Head>

        <main className={styles.container} >
            <article className={styles.post}>
                <h1>{post.title}</h1>
                <time>{post.updatedAt}</time>
               <div 
               className={styles.Postcontent}
               dangerouslySetInnerHTML={{__html: post.content}}/> 
            </article>
        </main>
        </>
    )
}


export const getStaticProps : GetStaticProps = async ({ params}) => {
   
    const {slug} = params ;


    const prismic = getPrismicClient() 
    
    console.log(session)

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