import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as redeem from '../components/RedeemHistory'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FitDb</title>
        <meta name="description" content="FitDb Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            FitDb Services
          </h1>
        </div>

        <p className={styles.description}>
           FitDB API
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/xandronus/niftyfit" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Find in-depth information about browse the source.</p>
          </a>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <redeem.RedeemHistory />
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/xandronus/niftyfit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
