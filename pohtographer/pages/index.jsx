import Link from 'next/link' 
import styles from '../styles/Home.module.css' 
 
 
 function index() {
   return (
     <div className={styles.homePage}>  
       <h1>Felix Dirks</h1> 
       <p>Photographer based in Düsseldorf</p>
       <button>
        <Link href="/About">
        WEBSITE
        </Link>
         </button>
     </div>
   )
 }
  
index.getLayout = function getLayout(page) { 

  return <landingPage>{page}</landingPage>;
  
}

 export default index