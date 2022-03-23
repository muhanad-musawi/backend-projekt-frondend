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
    <div className={styles.headerLinks}> 
    
        <Link href="/" className={router.pathname == "/" ? styles.active : ""}>
          <span className='desktopVersion'>Home</span> 
        <span className='mobileVersion'>  
          
        <Image src={home} alt="home" />
  
        </span>
        </Link>
      
        <Link href="/About"  className={router.pathname == "/About" ? styles.active : ""}>
          
          <span className='desktopVersion'>About</span> 
        <span className='mobileVersion'>  
          
        <Image src={about} alt="home" />
  
        </span>
          </a>
        </Link>
      
        <Link href="/Services">
          <a className={router.pathname == "/Services" ? styles.active  : ""}> 
          <span className='desktopVersion'>Services</span> 
        <span className='mobileVersion'>  
          
        <Image src={service} alt="home" />
  
        </span>
          </a>
        </Link>
      
        <Link href="/Photography">
          <a className={router.pathname == "/Photography" ? styles.active  : ""}> 
          <span className='desktopVersion'>Photography</span> 
        <span className='mobileVersion'>  
          
        <Image src={home} alt="home" />
  
        </span>
          </a>
        </Link> 
      
        <Link href="/Contact">
          <div className={router.pathname == "/Contact" ? styles.active : ""}> 
          <span className='desktopVersion'>Contact</span>  

        <span className='mobileVersion'>  
          
        <Image src={contact} alt="contact" />
  
        </span>
          </div>
        </Link> 
        
        </div>
      
    </div>
  )
}

export default Header