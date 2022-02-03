// Implicit utility component imports
import Head from 'next/head';
import Link from 'next/link';

// Explicit Component imports
import Layout from '../../components/layouts';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>My First Blog Post</title>
                </Head>
                <h1 className='title'>First Post</h1>
                <h2>
                    <Link href='/'>
                        <a className='title'>Go back home</a>
                    </Link>
                </h2>
            </Layout>

        </>
    );
}
