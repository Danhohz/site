import styles from './AnimatedLogo.module.css'

let sunColor = '#ff9933';

export default function AnimatedLogo() {
    return (
        <div className={styles.logoContainer}>
            <PrimaryText>This is test</PrimaryText>
            <Sun/>
            <Stripes/>
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

function Stripes() {
    let stripesStyle = [
        {
            width: '60vw',
        },
        {
            width: '45vw',
        },
        {
            width: '20vw',
        },
    ]
    return (
        <div className={styles.Stripes}>
            {stripesStyle.map(e => <Stripe style={e}/>)}
        </div>
    )
}

function Stripe({style={}}) {

    return (
        <div className={styles.Stripe} style={style}>
            
        </div>
    )
}

function PrimaryText({children}) {
    return (
        <div className={styles.PrimaryText}>{children}</div>
    )
}