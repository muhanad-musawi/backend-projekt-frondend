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
  <a href="'">straße</a>
</div>
</div>
 
 <div >
    <h6>Appointment Tues. - Sat. at:</h6>
          <div>
            <a href="'">211 11 11 11 11</a>
            <a href="'">Muhanads</a>
          </div>
  </div>


<div>
<h6>Parking garage</h6>
<div >
  < href="'">Fürstenwall </a>
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


    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
            <a href="#">M-B-S</a>.
          </p>
       </div> 


        <div >
          <ul >
            <li><a  href="#">facebook</a></li>
            <li><a  href="#">twitter</a></li>
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