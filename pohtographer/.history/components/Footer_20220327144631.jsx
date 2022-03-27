import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      

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


      <div className={styles.OpeningContactDetails}>
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
            <Link href="#1">Jobs</Link>
            <Link href="#2">Impressum</Link>
            <Link href="#3">Datenschutzerklärung</Link>
          </div>
        
      
      <div className={styles.socialMedia}> 
      <div >
        <p>
          Copyright &copy; 2021 All Rights Reserved by
          <Link href="#">M-B-S</Link>.
        </p>
      </div>
      <div>
        <ul className={styles.socialMediaUl}>
          <li>
            <Link href="#">facebook</Link>
          </li>
          <li>
            <Link href="#">twitter</Link>
          </li>
          <li>
            <Link href="#">twitter </Link>
          </li>
          <li>
            <Link href="#">facebook</Link>
          </li>
        </ul>
      </div> 
      </div>

     

    </div>
  );
}

export default Footer;
