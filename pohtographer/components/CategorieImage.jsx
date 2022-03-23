import React, { useEffect, useState } from 'react'

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

  
 // events muss durch user input ausgetauscht werden in der filter funktion fuer die darstellung 
 //  {images.filter(image.pathCategorie==="events").map((image,

  return (
    <div>
      {param === "" || param ? 
      images.map((image, index) => (
        <div key={index}>
          <img src={image.path} alt="picture"/>
        </div>
      ))
      : 
      images.filter(image.pathCategorie===param).map((image,
        <div key={index}>
          <img src={image.path} alt="picture"/>
        </div>
      ))
      }      
    </div>
  )
}

export default CategorieImage