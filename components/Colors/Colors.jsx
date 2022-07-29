import styles from './Colors.module.css'

export default function Colors() {
    let colors = ['#ff03a4', '#0099ff', '#ff3366', '#993399', '#ff9933', '#C875FF', 'black', 'white'];
    let size = '200px';

    let elements = colors.map(e => (<div key={e} style={{backgroundColor: e}} className={styles.color}>{e}</div>))

    return (
        <div className={styles.colorsContainer}>
            {elements}
        </div>
    )
}