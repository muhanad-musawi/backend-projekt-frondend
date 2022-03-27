import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>

    <div className={styles.startFooter}>
      <div className={styles.conceptText}>
        <h6>Muhanad</h6>
        <p>
          With this concept for men, enjoy pure, precise handwork in a relaxed
          atmosphere at Muhanad`s Barber Shop. The barber is a true craftsman
          profession. He knows not only about the main hair, but also about
          beard care, wet shaving - he is THE expert for men`s hair.
        </p>
      </div>

      <div className={styles.adresseLink}>
        <h6>Muhanad</h6>
        <div>
          <Link href="'">straße</Link>
        </div>
      </div>

      <div className={styles.openingContactDetails}>
        <h6>Appointment Tues. - Sat. at:</h6>
        <div>
          <Link href="'">211 11 11 11 11</Link>
          <Link href="'">Muhanads</Link>
        </div>
      </div>

      <div className={styles.parkingGarage}>
        <h6>Parking garage</h6>
        <div>
          <Link href="'">Fürstenwall</Link>
        </div>
      </div>

      <div className={styles.jobsImpressumDatenschutzerklärungLink}> 
      <div><Link href="'">Jobs</Link></div> 
      <div><Link href="'">Impressum</Link></div>
       <div><Link href="'">Datenschutzerklärung</Link></div> 
       <div><Link href="">Datenschutzerklärung</Link></div>
      </div>
       </div>


      <div className={styles.endFooter}> 

        <div className={styles.copyrightLink}>
          <p>
           Copyright &copy; 2022 All Rights Reserved by 
           <span className={styles.link}><Link href="#">  Mhhhh</Link></span>.
          </p>
        </div> 

        <div className={styles.socialMedia}>
          <ul className={styles.socialMediaUl}>
            <li> 
              <span><Link href="#">facebook</Link></span>
              
            </li>
            <li> 
              <span><Link href="#">twitter</Link></span>
              
            </li>
            <li>
              <span><Link href="#">twitter </Link></span>
              
            </li>
            <li>
              <span><Link href="#">facebook</Link></span>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  );
}

export default Footer;
