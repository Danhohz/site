import styles from './Introduce.module.css'

export default function Introduce() {
    return (
        <section className={styles.IntroduceContainer}>
            <Capture>Let me introducde myself</Capture>
            <Header>Daniil Khokhlov</Header>
            <Capture>RUSSIAN SOFTWARE ENGINEER FOR REACT.JS</Capture>
        </section>
    )
}

function Header({children}) {
    return (
        <p className={styles.Header}>
            {children}
        </p>
    )
}

function Capture({children}) {
    return (
        <p className={styles.Capture}>
            {children}
        </p>
    )
}