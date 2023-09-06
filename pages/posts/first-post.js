import Link from "next/link";
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost(){
    return (
        <>
        <Layout>
        <Head>
        <title>First Post</title>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        
        onLoad={(e) =>
          console.log('script loaded correctly, window.FB has been populated')
        }
        />
        </Head>
        
        <div> 
        <h1>First Post</h1>
        <h2> <Link href="/">Back to home</Link></h2>
        <Image
            src="/images/profile.jpg" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Shree"
            className={styles.fluid}
            
        />
        </div>
        </Layout>
        </>

    );
}