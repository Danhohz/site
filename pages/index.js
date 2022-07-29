import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import H1 from '../components/H1/H1'
import Colors from '../components/Colors/Colors'
import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danhoh</title>
      </Head>
      <AnimatedLogo/>
      <Colors/>
      <H1>Im so fucking good?</H1>
      {/* <p style={{color: 'green'}}>ZXC tichka thicka bkb</p> */}
      <audio src='/main.mp3' controls></audio>
    </>
  )
}
