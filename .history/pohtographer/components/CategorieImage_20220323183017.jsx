import React, { useEffect } from 'react'

function CategorieImage() {

  const [images,setImages] = useState({});

  useEffect(()=>{
    fetchAllImages()
  }, [])

  const fetchAllImages = async () => {
    /*'http://localhost:4000/photo/all'*/

    await fetch('http://localhost:4000/photo/all')
      .then((response) => response.json())
      .then((data) => {
        //console.log("data" + data)
        setImages(data);
        //console.log("categorie" + categories)
      })
      .catch((err) => console.log(err));
  };

  
 // events muss durch user input ausgetauscht werden in der filter funktion fuer die darstellung {images.filter(image.pathCategorie==="events").map((image,

  return (
    <div>
      {images.filter(image.pathCategorie==="events").map((image, index) => (
        <div key={index}>
          <img src={image.path} alt="picture"/>
        </div>
      ))}
    </div>
  )
}

export default CategorieImage