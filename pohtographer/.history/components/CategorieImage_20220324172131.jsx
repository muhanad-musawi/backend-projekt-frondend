import React, { useEffect, useState } from 'react'; 
import Image from "next/image";
import styles from '../styles/CategorieImage.module.css';

function CategorieImage({categories, selectedCategory}) {

  const [images,setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    fetchAllImages()
  }, [selectedCategory]) 

  const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL; /* || 'http://localhost:4000' */

  const fetchAllImages = async () => { 
    setIsLo
    const RECORDS_PATH = BACKEND_URL + `/photos/category/${selectedCategory}`; 
    
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


   // categorie delete ↓

   async function onDeleteImg(id) {
    let check = prompt("Type YES to delete");
    if (check === "YES" || check === "yes") { 
      console.log(BACKEND_URL);
      console.log("id", id);
      await fetch(BACKEND_URL + `/photos/${id}`, { 
        
        method: "delete",
      }) 
       
        .then((response) => {
          if (response.status !== 200) {
            return;
          } else {
            //Wenn wir die API selber besitzen
            //fetchUserData()
            setImages(
              images.filter((image) => {
                return image._id !== id;
              })
            );
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Wrong Delete");
    }
  }

 
  // categorie delete ↑

{ /* */

  
 /**/}

  return (
    {isLoading ?
      <div>
      </div>
    :
    }
    <div className= {styles.imgMap} >
      {
        images.map((image, index) => (
          <div className={styles.imgContainer} key={index}> 
            <button onClick={() => onDeleteImg(image._id)}>
            🗑️ 
            </button>
            <img className={styles.img} src={image.path} alt="picture"/>
          </div>
        ))
      }
    </div>
  )
}

export default CategorieImage