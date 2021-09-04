import styles from './styles.module.scss'
import Head  from 'next/head'
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'


type Post = {
    slug : string;
    title : string ;
    excerpt : string;
    updatedAt : string;

}

interface PostProps {
    posts : Post[]
}


export default function Post(post : PostProps ) {
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
          <div className={styles.posts} >

             {post.map(posts => {})}
              <a href="">
                  <time>12 de março de 2021</time>
                  <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                  <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>
              
              <a href="">
                  <time>12 de março de 2021</time>
                  <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                  <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>

               <a href="">
                  <time>12 de março de 2021</time>
                  <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                  <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>
 
          </div>  
        </main>
        </>
    );
}


// genering a static data

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.Predicates.at('document.type' , 'publication')
    ], 
    {
        fetch:['publication.title', 'publication.content'],
        pageSize:100,
    })
     
    const posts = response.results.map((post)=> {
        return {
            slug: post.uid,
            title : RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt : new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month:'long',
                year : 'numeric'
            })
        }
    }) 
    console.log(JSON.stringify(response , null ,2))

    return {
        props:{
            posts
        }
    }
} 