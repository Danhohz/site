import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { urls } from "../../urls"
import styles from './Navigation.module.css'

const navBreakPoint = 800;

// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//       function updateSize() {
//         setSize([window.innerWidth, window.innerHeight]);
//       }
//       window.addEventListener('resize', updateSize);
//       updateSize();
//       return () => window.removeEventListener('resize', updateSize);
//     }, []);
//     return size;
//   }
  
//   function ShowWindowDimensions(props) {
//     const [width, height] = useWindowSize();
//     return <span>Window size: {width} x {height}</span>;
//   }

export default function Navigation() {
    let [shown, setShown] = useState(true);
    // let windowSize = useWindowSize();
    let navRef = useRef(null);

    let setClass = (_class) => {
        navRef.current.setAttribute('class', styles.Navigation + ' ' + (_class ? _class : ''));
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log('resize');
            if (window.innerWidth > navBreakPoint)
                navRef.current.style.transform = '';
                navRef.current.style.transition = '';
        })
    }, []);

    let handleBtn = () => {
        setShown(!shown);
        // navRef.transition = 'all .5s';
        // console.log(shown);
        if (window.innerWidth <= navBreakPoint) {
            navRef.current.style.transition = 'transform .5s';
            // console.log(window.innerWidth);
            if (shown) {
                navRef.current.style.transform = 'translate(0, 0)';
                // setClass(styles.NavShown);
            }
            else {
                navRef.current.style.transform = 'translate(-100vw, 0)';
                // setClass(styles.NavHidden);
            }
        }
            
    }
    return (
        <div className={styles.NavigationContainer}>
        {/* <div>{windowSize}</div> */}
            <NavBtn onClick={handleBtn}/>
            <nav onClick={handleBtn} ref={navRef} className={styles.Navigation}>
                <ul className={styles.NavUl}>
                 {urls.map(e => <li className={styles.NavLi} key={e.url}><Link href={e.url}><a className={styles.NavA}><span className={styles.NavASpan}>{e.name}</span></a></Link></li>)}
                </ul>
            </nav>
        </div>
        
    );
}

function NavBtn({onClick}) {
    return (
        <button className={styles.NavBtn} onClick={onClick}><NavIcon/></button>
    )
}

function NavIcon() {
    return (
        <svg className={styles.NavIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.58 22.63"><g id="Layer_2" data-name="Layer 2"><g id="Header"><g class="cls-1"><rect class="cls-2" width="28.58" height="4.88" rx="2.44"/><rect class="cls-2" y="8.88" width="28.58" height="4.88" rx="2.44"/><rect class="cls-2" y="17.75" width="28.58" height="4.88" rx="2.44"/></g></g></g></svg>
    )
}

