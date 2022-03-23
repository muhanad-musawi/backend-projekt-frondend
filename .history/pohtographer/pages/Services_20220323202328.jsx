

import styles from '../styles/main.module.css' 
import Image from 'next/image' 




function Leistungen() {
  return (
    <div>
    
    <div className={styles.mainContent}  >
    
    <h2 className={styles.hTwo} >Leistungen</h2>    

    <div  className={styles.imgText} >
    <p className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Arcu dictum varius duis at consectetur lorem donec. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Pellentesque massa placerat duis ultricies lacus sed. Egestas erat imperdiet sed euismod nisi porta. Enim sit amet venenatis urna.
    </p>  
    <Image width={192}  height={118} src={imgA} alt="" />
    </div> 

    <p  className={styles.text}>Urna neque viverra justo nec ultrices dui sapien. Viverra orci sagittis eu volutpat. Ipsum suspendisse ultrices gravida dictum fusce. Eu mi bibendum neque egestas congue quisque egestas diam. Semper auctor neque vitae tempus quam. Cursus in hac habitasse platea dictumst quisque. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Lectus mauris ultrices eros in cursus turpis. Tincidunt lobortis feugiat vivamus at augue eget. In fermentum posuere urna nec tincidunt praesent. Tempor nec feugiat nisl pretium fusce id velit ut. Cursus mattis molestie a iaculis.</p> 

    <p className={styles.text}> 
    Urna neque viverra justo nec ultrices dui sapien. Viverra orci sagittis eu volutpat. Ipsum suspendisse ultrices gravida dictum fusce. Eu mi bibendum neque egestas congue quisque egestas diam. Semper auctor neque vitae tempus quam. Cursus in hac habitasse platea dictumst quisque. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Lectus mauris ultrices eros in cursus turpis. Tincidunt lobortis feugiat vivamus at augue eget. In fermentum posuere urna nec tincidunt praesent. Tempor nec feugiat nisl pretium fusce id velit ut. Cursus mattis molestie a iaculis.
    </p>

  </div>  

  
  </div>
  )
}

export default Leistungen