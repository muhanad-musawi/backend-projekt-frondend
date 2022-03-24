import styles from "../styles/Photography.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import GetAllCategory from "../components/GetAllCategory";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import AddPhoto from "../components/AddPhoto";
import CategorieImage from "../components/CategorieImage";

function Photography() {
  const initialInput = {
    categorie: "",
  };

  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState(initialInput);
  const [selectedCategory, setSelectedCategory] = useState("Events");

  useEffect(() => {
    fetchCategoriesData();
  }, []); //Dependancy Array

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL; /* || 'http://localhost:4000' */
  const RECORDS_PATH = BACKEND_URL + "/photo-gallery/all";

  //console.log(BACKEND_URL);

  // get all categorie  ↓

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

  // get all categorie ↑

  // new categorie Add ↓

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  console.log(inputs);
  const Categorie_PATH = BACKEND_URL + "/photo-gallery/new";

  const fetchCategoryAddData = (category) => {
    console.log("category:" + category);

    /*'http://localhost:4000/records'*/

    const categoryJson = JSON.stringify(category);
    fetch(Categorie_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: categoryJson,
    })
      .then((response) => {
        if (response.status !== 201) {
          alert("An Error occured");
          return;
        } else {
          fetchCategoriesData(); //router.reload(window.location.pathname) //navigate("/Photography", { replace: true });
          return response.json();
        }
      })
      .catch((err) => console.log(err));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      categories.find((category) => category.categorie === inputs.categorie)
    ) {
      alert("category exist");
    } else {
      const newCategory = {
        ...inputs,
      };
      fetchCategoryAddData(newCategory);
    }
  }

  // New categorie add ↑

  // categorie delete ↓

  async function onDelete(id) {
    let check = prompt("Type YES to delete");
    if (check === "YES" || check === "yes") {
      console.log("id", id);
      await fetch(BACKEND_URL + `/photo-gallery/${id}`, {
        method: "delete",
      })
        .then((response) => {
          if (response.status !== 200) {
            return;
          } else {
            //Wenn wir die API selber besitzen
            //fetchUserData()
            setCategories(
              categories.filter((category) => {
                return category._id !== id;
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

  const handleInputChangeCategory = (categorie) => {
    console.log("event"+categorie)
    setSelectedCategory(  const handleInputChangeCategory = (categorie) => {
      );
  };

  return (
    <div>
      <div className={styles.addCategory}>
        <AddCategory
          inputs={inputs}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className={styles.deleteCategory}>
        <DeleteCategory categories={categories} onDelete={onDelete} />
      </div>

      <div>
        <AddPhoto categories={categories} />
      </div>

      <div>
        <GetAllCategory
          categories={categories}
          handleInputChangeCategory={handleInputChangeCategory}
        />
      </div>

      <div>
        <CategorieImage
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}

export default Photography;
