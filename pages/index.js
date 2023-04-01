import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting Coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script src="/js/src.js" strategy="lazyOnload" /> */}

      <main className={styles.main}>
      <div>
        <h1>Hunting Coder</h1>
        <br />
        <p>A Blog for Hunting Coders </p>
        <br />
      </div>
      </main>
    </>
  )
}
