import Link from 'next/link'
import styles from '../styles/Footer.module.css' 

function Footer() {
  return (
    <div className={styles.footer} > 
      <h6>Muhanad’s Barber Shop </h6> 

      <p>With this concept for men, enjoy pure, precise handwork in a relaxed atmosphere at
            Muhanad`s Barber Shop. The barber is a true craftsman profession. He knows not only about the main hair, but
            also about beard care, wet shaving - he is THE expert for men`s hair. 
            </p>
        </div> 

<div >
<h6>Muhanad</h6>
<div >
  <Link href="'">straße</Link>
</div>
</div>
 
 <div >
    <h6>Appointment Tues. - Sat. at:</h6>
          <div>
            <Link href="'">211 11 11 11 11</Link>
            <Link href="'">Muhanads</Link>
          </div>
  </div>


<div>
<h6>Parking garage</h6>
<div >
  <Link href="'">Fürstenwall </Link>
</div>
</div> 

<div>
<div >
  <div >
    <Link href="#1">Jobs</Link>
    <Link href="#2">Impressum</Link>
    <Link href="#3">Datenschutzerklärung</Link>
  </div>
</div>
</div> 


    <div >
      <div >
        <div >
          <p >Copyright &copy; 2021 All Rights Reserved by
            <Link href="#">M-B-S</Link>.
          </p>
       </div> 


        <div >
          <ul >
            <li><Link  href="#">facebook</Link></li>
            <li><Link  href="#">twitter</Link ></li>
            <li><a  href="#">twitter</li>
            <li><a  href="#">facebook</a></li>
          </ul>
        </div> 


      </div>
    </div>


        
    </div>
  )
}

export default Footer