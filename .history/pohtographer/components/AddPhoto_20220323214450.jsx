 import {useState} from 'react'
 
 function AddPhoto({categories}) { 
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const RECORDS_PATH = BACKEND_URL + "/photos/new";
  
  const API_PHOTO_NAME = "uploaded_file"

  const [newFile, setNewFile] = useState({ photo: "" });
  const [photoCategorie, setPhotoCategorie] = useState("events");
  const [imageSrc, setImageSrc] = useState(""); // Bild als Daten (String)

  const handleSubmit = async (e) => { 

    e.preventDefault();
    const formData = new FormData();
    formData.append(API_PHOTO_NAME, newFile.photo);
    //console.log( "formData"+formData)
    //console.log("categorie"+photoCategorie)

    await fetch(RECORDS_PATH , {
      method: "POST",
      body: formData,
    })
    .then((response)=>{
      console.log("response" + response.status)
      if(response.status === 201){
        alert("Image was saved!")
        setNewFile("");
        setImageSrc("")
        setPhotoCategorie("")
      } else{
        alert("Some Error occured")
      }
    })
    .catch((error)=>console.log(error))
  };

  const handlePhoto = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
    setNewFile({ photo: file });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={handlePhoto}
        />
        <br />
        {imageSrc.length === 0 ? null : (
          <div>
            Image Preview...
            <img width="20%" height="auto" src={imageSrc} alt="text" />
          </div>
        )}
        <select onChange={(e)=>setPhotoCategorie(e.target.value)}>
        {categories.map((categorie, index) => <option key={index} value={categorie}>{categorie}</option>)}
        </select>
        <input type="submit" />
        <hr />
      </form>
    </div>
  );
}
export default AddPhoto;
