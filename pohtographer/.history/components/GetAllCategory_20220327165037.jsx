import styles from '../styles/GetAllCategory.module.css' 




function GetAllCategory ({categories, handleInputChangeCategory}){
  
  return (
    <div  >
      {categories.map((category, index) => (
        <div className={styles.imageCategory} key={index}>
          <ul className={styles.ulCategory} key={index}>
            <li key={index}>
              <button onClick={e=>handleInputChangeCategory(category.categorie)}>
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
