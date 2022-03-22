import styles from '../styles/AddCategory.module.css' 


function AddCategory({handleSubmit , inputs ,   handleInputChange}) {
  return (
    <div>
      <h3>Here you can add a new category</h3>
      <form className="addRecordsForm" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="categorie"
          placeholder=" new categorie"
          value={inputs.categorie}
          size="30"
          maxLength="50"
          onChange={handleInputChange}
        ></input>
        <input type="submit" value="Send" />
      </form> 
    </div>
  )
}

export default AddCategory