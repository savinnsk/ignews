import { GetStaticProps } from "next"
import { getSession } from "next-auth/client"
import  Head  from "next/head"
import { Link, RichText } from "prismic-dom"
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
               className={ `${styles.Postcontent} ${styles.previewContent}` }
               dangerouslySetInnerHTML={{__html: post.content}}/> 


               <div className={styles.continueReading}>
                    Wanna continue reading ?
                   <Link href="/" >
                        <a href="">🤗 Subescribe now</a>
                   </Link>
               </div>

            </article>
        </main>
        </>
    )
}


export const getStaticPaths = () => {

    return {
        paths : [],
        fallback : 'blocking'
    }
}

export const getStaticProps : GetStaticProps = async ({ params}) => {
   
    const {slug} = params ;


    const prismic = getPrismicClient() 

    const response = await prismic.getByUID('publication', String(slug) , {})

    const post = {
        slug,
        title : RichText.asText(response.data.title),
        content : RichText.asHtml(response.data.content.splice(0 , 3)),
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