import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [makingProcess, setMakingProcess] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [img, setImg] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    const split_ingredients = ingredients.split(",");
    const split_makingProcess = makingProcess.split("\n");

    console.log(recipeName);
    console.log(description);
    console.log(authorName);
    console.log(makingProcess);

    axios
      .post(
        "https://recipe-backend-h0yr.onrender.com/api/recipes",
        {
          recipeName: recipeName,
          description: description,
          ingredients: split_ingredients,
          makingProcess: split_makingProcess,
          authorName: authorName,
          imgUrl: imgUrl,
          userId: localStorage.getItem("userId"),
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("successfuly uploaded");
      })
      .catch((err) => toast.error(err.response.data));
  }

  function fileOnChange(e) {
    setImg(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("recipeImage", img);

    axios
      .post(
        "https://recipe-backend-h0yr.onrender.com/api/recipes/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setImgUrl(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="main md: bg-white">
      <div className="container max-w-md mx-auto h-screen bg-purple-400 flex flex-col ">
        <div className="py-8 flex justify-around">
          <TextField
            id="outlined-basic"
            label="Recipe Name"
            variant="outlined"
            onChange={(e) => setRecipeName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Author Name"
            variant="outlined"
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2 grid content-around h-screen">
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            multiline
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Ingredients(seperated with comma)"
            variant="outlined"
            multiline
            onChange={(e) => setIngredients(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Making process"
            variant="outlined"
            multiline
            onChange={(e) => setMakingProcess(e.target.value)}
          />

          <form className="ml-6">
            <input type="file" name="recipeImage" onChange={fileOnChange} />
            <Button type="submit" variant="contained" onClick={handleUpload}>
              upload
            </Button>
          </form>
          <Button variant="outlined" onClick={handleSubmit}>
            submit
          </Button>

          <div className="flex justify-center">
            {" "}
            <Button
              color="primary"
              variant="outlined"
              onClick={() => navigate("/")}
              className="w-16 "
            >
              <ArrowBackIcon />
            </Button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;
