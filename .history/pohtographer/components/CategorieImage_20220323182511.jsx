import React from 'react'

function CategorieImage() {

  const 

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <ul className={styles.ulCategory} key={index}>
            <li key={index}>{category.categorie} </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default CategorieImage