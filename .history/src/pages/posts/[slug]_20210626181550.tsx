import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"

export default function Post () {

    return (
        <h1>teste</h1>
    )
}


export const getServerSideProps : GetServerSideProps = async ({req}) => {
    const session = await getSession({req})

}