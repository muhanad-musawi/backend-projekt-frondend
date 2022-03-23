 import {useState} from 'react'
 
 function AddPhoto() { 

  const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL;
const API_PHOTO_NAME = "uploaded_file"

  const [newFile, setNewFile] = useState({ photo: "" });

  const [imageSrc, setImageSrc] = useState(""); // Bild als Daten (String)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(API_PHOTO_NAME, newFile.photo);
    //console.log(formData)
    fetch(RECORDS_PATH + "/photos/new", {
      method: "POST",
      body: formData,
    });
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
        <input type="submit" />
        <hr />
      </form>
    </div>
  );
}
export default AddPhoto;
