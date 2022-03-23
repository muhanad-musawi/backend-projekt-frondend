import React from 'react'

function CategorieImage() {

  const 

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.path} alt="picture"
        </div>
      ))}
    </div>
  )
}

export default CategorieImage