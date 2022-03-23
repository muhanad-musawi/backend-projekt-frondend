import React from 'react'

function CategorieImage() {



  const fetchCategoriesData = async () => {
    /*'http://localhost:4000/photo-gallery'*/

    await fetch(RECORDS_PATH)
      .then((response) => response.json())
      .then((data) => {
        //console.log("data" + data)
        setCategories(data);
        //console.log("categorie" + categories)
      })
      .catch((err) => console.log(err));
  };

  const 

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.path} alt="picture"/>
        </div>
      ))}
    </div>
  )
}

export default CategorieImage