import styles from '../styles/GetAllCategory.module.css' 




function GetAllCategory ({categories, handleInputChangeCategory}){
  
  return (
    <div className={styles.imageCategory} >
      {categories.map((category, index) => (
        <div key={index}>
          <ul className={styles.ulCategory} key={index}>
            <li key={index}>
              <button   
              className={styles.ulCategory}
               onClick={e=>handleInputChangeCategory(category.categorie)}>
              {category.categorie} 
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GetAllCategory;
