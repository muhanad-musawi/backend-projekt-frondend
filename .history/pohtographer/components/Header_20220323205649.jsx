import Link from 'next/link'  
import Image from 'next/image' 
import home from '../img/home.svg'  
import about from '../img/about.svg'  
import service from '../img/service.svg' 
import experience from '../img/experience.svg'
import contact from '../img/contact.svg'

import styles from '../styles/Header.module.css' 
import { useRouter } from "next/router";  



function Header() { 

  const router = useRouter(); 

  return ( 
    <div className={styles.navbarCenter} > 
      <h1 className={styles.logoName}>Felix Dirks</h1>
    <ul className={styles.headerLinks}> 
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
          <a className={router.pathname == "/About" ? styles.fontRed : ""}> 
          <span className='desktopVersion'>About</span> 
        <span className='mobileVersion'>  
          
        <Image src={about} alt="home" />
  
        </span>
          </a>
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