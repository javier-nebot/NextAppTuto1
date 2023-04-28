import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola! estoy siguiendo este tutorial para entender como funciona Next.js al mismo tiempo que aprendo un poco de lenguaje JavaScript junto a la biblioteca React de JavaScript</p>
        <p></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <main>
        <h1 className={styles.title}>
          <Link href="/posts/first-post">this page</Link>
        </h1>
        <div className={styles.grid}>
          <Link href="/charts/first-chart" className={styles.card}>
            <h3>Charts &rarr;</h3>
            <p>Charts realisés avec ApexChart.js apres apprendre Next.js</p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </Layout>
  )
}
