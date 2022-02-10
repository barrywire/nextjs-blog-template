// Implicit component imports
import Layout from "../../components/layouts";

// Post id data imports
import { getAllPostsIds, getPostData } from "../../lib/posts";

export default function Post({ postData })
{
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths()
{
    const paths = getAllPostsIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params })
{
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
