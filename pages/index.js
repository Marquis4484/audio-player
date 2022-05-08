import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MusicPlayer } from "../components/MusicPlayer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Music Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MusicPlayer />
      </main>
    </div>
  )
}