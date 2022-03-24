import React, { useEffect, useState } from 'react';
import styles from '../styles/CategorieImage.module.css';

function CategorieImage({categories, param}) {

  const [images,setImages] = useState([]);

  useEffect(()=>{
    fetchAllImages()
  }, [])

  const fetchAllImages = async () => { 

    const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL; /* || 'http://localhost:4000' */
    const RECORDS_PATH = BACKEND_URL + "/photos/all";
    /*'http://localhost:4000/photos/all'*/

    await fetch(RECORDS_PATH)
      .then((response) => response.json())
      .then((data) => {
        //console.log("data" + data)
        setImages(data);
        //console.log("categorie" + categories)
      })
      .catch((err) => console.log(err));
  };

  {
  {categories.map((category, index) => (
    <div>
      <div key={index}>
        <button onClick={() => onDelete(category._id)}>
          🗑️ {category.categorie}
        </button>
      </div>
    </div>
  ))} 
   }

  if (categories.includes(param)) {
    return(
      images.filter(image.pathCategorie===param).map((image,
        <div key={index}>
          <img src={image.path} alt="picture"/>
        </div>
      ))
    )
  }
  return (
    <div className= {styles.imgMap} >
      {
        images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <img className={styles.img} src={image.path} alt="picture"/>
          </div>
        ))
      }
    </div>
  )
}

export default CategorieImage