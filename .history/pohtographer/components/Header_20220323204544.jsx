import Link from 'next/link'  
import Image from 'next/image' 
import home from '../img/home.svg'  
import  from '../img/home.svg' 

import styles from '../styles/Header.module.css' 
import { useRouter } from "next/router";  



function Header() { 

  const router = useRouter(); 

  return ( 
    <div className={styles.navbar} > 
      <h1 className={styles.logoName}>Felix Dirks</h1>
    <ul className={styles.links}> 
    <li>
        <Link href="/">
          <a className={router.pathname == "/" ? styles.fontRed : ""}><span className='desktopVersion'>Home</span> 
        <span className='mobileVersion'>  
          
        <Image src={home} alt="home" />
  
        </span></a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a className={router.pathname == "/About" ? styles.fontRed : ""}>ABOUT</a>
        </Link>
      </li>
      <li>
        <Link href="/Services">
          <a className={router.pathname == "/Services" ? styles.fontRed  : ""}>SERVICES</a>
        </Link>
      </li>
      <li>
        <Link href="/Photography">
          <a className={router.pathname == "/Photography" ? styles.fontRed  : ""}>PHOTOGRAPHY</a>
        </Link> 
      </li> 
      <li>
        <Link href="/Contact">
          <a className={router.pathname == "/Contact" ? styles.fontRed  : ""}>CONTACT</a>
        </Link> 
        
      </li>
    </ul> 
    </div>
  )
}

export default Header