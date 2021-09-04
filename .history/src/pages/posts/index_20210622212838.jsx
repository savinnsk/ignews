import styles from './styles.module.scss'

export function Post(){
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main>
          <div>
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