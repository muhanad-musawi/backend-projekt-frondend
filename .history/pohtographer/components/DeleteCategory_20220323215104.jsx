import styles from '../styles/DeleteCategory.module.css' 

function DeleteCategory({categories , onDelete } ) {
  return (
    <div>
      <h3>Here you can delete category of your choice</h3>  
      <h5>Be careful, the images under the deleted category will all be deleted as well!</h5>
      <div className={styles.deleteCategoryBTN}>
        {categories.map((category, index) => (
          <div>
            <button key={index} onClick={() => onDelete(category._id)}>🗑️ {category.categorie}</button>
            

            
          
          

          </div>
        ))} 
        </div>
    </div>
  )
}

export default DeleteCategory