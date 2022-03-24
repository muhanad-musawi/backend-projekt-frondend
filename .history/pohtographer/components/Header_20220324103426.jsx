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
    
        <Link href="/">
          <a className={router.pathname == "/" ? styles.active : ""}><span className={styles.desktopVersion}>Home</span> 
        <span className={styles.mobileVersion}>  
          
          <span></span>
        
  
        </span></a>
        </Link>
      
        <Link href="/About">
          <a className={router.pathname == "/About" ? styles.active : ""}> 
          <span className={styles.desktopVersion}>About</span> 
        <span className={styles.mobileVersion}>  
          
         
        <span className={styles.img} ><Image   src={about} alt="home" /></span>
  
        </span>
          </a>
        </Link>
      
        <Link href="/Services">
          <a className={router.pathname == "/Services" ? styles.active  : ""}> 
          <span className={styles.desktopVersion}>Services</span> 
        <span className={styles.mobileVersion}>  
          
          <span className={styles.img}><Image  src={service} alt="service" /></span>
        
  
        </span>
          </a>
        </Link>
      
        <Link href="/Photography">
          <a className={router.pathname == "/Photography" ? styles.active  : ""}> 
          <span className={styles.desktopVersion}>Photography</span> 
        <span className={styles.mobileVersion}>  
          
          <span className={styles.img} > <Image  src={home} alt="home" /></span>
        
  
        </span>
          </a>
        </Link> 
      
        <Link href="/Contact">
          <div className={router.pathname == "/Contact" ? styles.active : ""}> 
          <span className={styles.desktopVersion}>Contact</span>  

        <span className={styles.mobileVersion}>  
          
          <span className={styles.img} ><Image  src={contact} alt="contact" /></span>
      
        </span>
          </div>
        </Link> 
        
        </div>
      
    </div>
  )
}

export default Header