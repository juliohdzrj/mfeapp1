import Head from 'next/head'
import Mario from '../components/mario'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MFE Demo App 1.1</title>
        <meta name="description" content="This is an app1.1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mario />
    </div>
  )
}
