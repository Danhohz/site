import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import H1 from '../components/H1/H1'
import Introduce from '../components/Introduce/Introduce'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danhoh</title>
      </Head>
      <Introduce/>
      <H1>Im so fucking good?</H1>
      {/* <p style={{color: 'green'}}>ZXC tichka thicka bkb</p> */}
      <audio src='/main.mp3' controls></audio>
    </>
  )
}
