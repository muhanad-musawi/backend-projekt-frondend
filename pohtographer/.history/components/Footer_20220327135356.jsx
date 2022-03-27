import styles from '../styles/Footer.module.css' 

function Footer() {
  return (
    <div className={styles.footer} > 
      
      {<!--footer A-->
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>Muhanad’s Barber Shop </h6>
          <p class="text-justify">With this concept for men, enjoy pure, precise handwork in a relaxed atmosphere at
            Muhanad`s Barber Shop. The barber is a true craftsman profession. He knows not only about the main hair, but
            also about beard care, wet shaving - he is THE expert for men`s hair.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Muhanad’s Barber Shop</h6>
          <div class="footer-links">
            <a href="'">Berlinerstraße 10 40401 Berlin</a>
          </div>
        </div>


        <div class="col-xs-6 col-md-3">
          <h6>Appointment
            Tues. - Sat. at:</h6>
          <div class="footer-links">
            <a href="'">+49 211 11 11 11 11</a>
            <a href="'">info@Muhanads-barbershop.de</a>
          </div>
        </div>


        <div class="col-xs-6 col-md-3">
          <h6>Parking garage</h6>
          <div class="footer-links">
            <a href="'">Fürstenwall 23
              40401 Berlin</a>
          </div>
        </div>

        <div class="col-xs-6 col-md-3">

          <div class="footer-links">
            <div class="footer-a">

              <a href="#1">Jobs</a><br><br>
              <a href="#2">Impressum</a><br><br>
              <a href="#3">Datenschutzerklärung</a><br><br>
            </div>
          </div>
        </div>



      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
            <a href="#">M-B-S</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>

        </div>
      </div>
    </div>
  </footer>
  <!--footer E-->

    </div>
  )
}

export default Footer