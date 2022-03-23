function AddPhoto() {
  const [newFile, setNewFile] = useState({
    photo: "",
  });
  const [imageSrc, setImageSrc] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newFile.photo);
    //console.log(formData)
    fetch("DEINE_BACKEND_URL", {
      method: "POST",
      body: formData,
    });
  };
  const handlePhoto = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
    setNewFile({ ...newFile, photo: e.target.files[0] });
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
