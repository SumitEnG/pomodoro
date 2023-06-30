import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function SpecificForFav() {
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  console.log(recipe);
  console.log(recipe.imgUrl);

  function getRecipeById() {
    axios
      .get(
        `https://recipe-backend-h0yr.onrender.com/api/favRecipe/${localStorage.getItem(
          "recipeIdFav"
        )}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleRemove() {
    axios
      .delete(
        `https://recipe-backend-h0yr.onrender.com/api/favRecipe/${localStorage.getItem(
          "recipeIdFav"
        )}`
      )
      .then((res) => {
        console.log(res);
        navigate("/fav");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getRecipeById();
  }, []);
  return (
    <>
      <div className="main md: bg-white">
        <div className="container mx-auto bg-purple-300   max-w-md ">
          <div className="img  h-56 flex justify-center ">
            <img
              src={`https://recipe-backend-h0yr.onrender.com/${recipe?.imgUrl}`}
              alt=""
              className="rounded-bl-full rounded-br-full w-96"
            />
            {console.log(
              `https://recipe-backend-h0yr.onrender.com/${recipe?.imgUrl}`
            )}
          </div>

          <div className="name text-center text-2xl md:text-4xl p-4 font-bold">
            {recipe.recipeName}
          </div>
          <div className="grey-space h-0.5 bg-gray-500"></div>

          <div className="otherBody ">
            <div className="description">
              <div className="heading text-center text-lg font-bold">
                Description
              </div>
              <div className="dis p-2 text-center flex flex-wrap">
                {recipe.description}
              </div>
            </div>
            <div className="grey-space  h-0.5 bg-gray-500"></div>
            <div className="ingredients p-3">
              <div className="heading text-center text-lg font-bold">
                Ingredients
              </div>
              <div className="ing px-10 text-center flex flex-wrap">
                <ul className="list-disc">
                  {recipe.ingredients?.map((v) => (
                    <li>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grey-space h-0.5 bg-gray-500"></div>
            <div className="makingProcess p-3">
              <div className="heading text-center text-lg font-bold">
                Making-process
              </div>
              <div className="mp px-10 text-center flex flex-wrap">
                <ol className="list-decimal">
                  {recipe.makingProcess?.map((v) => (
                    <li>{v}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="grey-space h-0.5 bg-gray-500"></div>
            <div className="author p-4 font-bold">
              <span className="name">Published by : - {recipe.authorName}</span>
              <div className="time"> {recipe.date?.slice(0, 10)}</div>
            </div>

            <div className="others font-bold flex justify-around pb-10">
              <div className="rating">
                rating:-
                {recipe.ratings === null ? "No ratings" : recipe.ratings}{" "}
                <StarIcon />
              </div>
              <div
                className="unfav hover:cursor-pointer"
                onClick={handleRemove}
              >
                <RemoveCircleIcon />
              </div>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => navigate("/")}
              >
                <ArrowBackIcon />
              </Button>
              <Toaster />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificForFav;
