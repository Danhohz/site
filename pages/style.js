import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import H1 from '../components/H1/H1'
import Navigation from '../components/Navigation/Navigation'
import Colors from '../components/Colors/Colors'

export default function Style() {

    return (
        <>
            <Colors/>
            <H1>This is h1</H1>
            {/* <img src='/kach.jp  g' alt='me'/> */}
        </>
    )
}