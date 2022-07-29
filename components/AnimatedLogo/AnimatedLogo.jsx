import styles from './AnimatedLogo.module.css'

let sunColor = '#ff9933';

export default function AnimatedLogo() {
    return (
        <div className={styles.logoContainer}>
            <Sun/>
        </div>
    )
}


function Sun() {
    let style = {
        backgroundColor: sunColor
    }
    return (
        <div className={styles.Sun} style={style}>

        </div>
    )
}