// Next imports
import Head from 'next/head'

// Styles imports
import utilityStyles from '../styles/utils.module.css';

// Utility component imports
import Layout, { siteTitle } from '../components/layouts'

// Explicit component imports
import Link from 'next/link'

// Implicit component imports
import Date from '../components/Date'

// Blog post data imports
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps()
{
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData })
{
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilityStyles.headingMd}>
        <p>My name is Barry. I am a Software Developer from Nairobi, Kenya. I love learning new things and applying them to solving problems.</p>
      </section>

      <section className={`${ utilityStyles.headingMd } ${ utilityStyles.padding1px }`}>
        <h2 className={utilityStyles.headingLg}>Blog</h2>
        <ul className={utilityStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilityStyles.listItem} key={id}>
              <Link href={`/posts/${ id }`} >
                {title}
              </Link>
              <br />
              <small className={utilityStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}