// Styles imports
import utilityStyles from '../../styles/utils.module.css'

// Explicit Next component imports
import Head from 'next/head'

// Implicit component imports
import Layout from '../../components/layouts'
import Date from '../../components/Date'

// Post id data imports
import { getAllPostsIds, getPostData } from '../../lib/posts'

export default function Post({ postData })
{
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilityStyles.headingXl}>{postData.title}</h1>
                <div className={utilityStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout >
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
