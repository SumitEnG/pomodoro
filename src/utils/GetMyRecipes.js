import React, { useEffect, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetMyRecipes() {
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  function getRecipes() {
    axios
      .get("https://recipe-backend-h0yr.onrender.com/api/recipes")
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }

  function navigateToFullPage(id) {
    navigate("/specificRecipe");
    localStorage.setItem("recipeId", id);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      {recipe
        .filter((value) => value.userId === localStorage.getItem("userId"))
        .map((v) => (
          <div className="recipe-card" key={v._id}>
            <div className="grey-space h-0.5 bg-gray-500"></div>
            <div className="card h-48  bg-slate-200 mx-4 my-2 rounded-xl flex ">
              <img
                className="h-2/4 rounded-lg my-10 mx-2 w-1/3 md:h-3/4 md:my-5"
                src={v.imgUrl}
                alt=""
              />
              <div className="other_material flex flex-col w-2/3 text-sm md:text-base">
                <div className="name text-lg text-center font-bold mb-4 md:text-xl">
                  {v.recipeName}
                </div>
                <ul className="list-disc px-6 w-fit">
                  <li className="discription  ">
                    {v.description.slice(0, 20)}...
                  </li>
                  <li className="ratings">
                    rating: {v.ratings === null ? "No ratings" : recipe.ratings}{" "}
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                </ul>
                <div className="author">
                  Published by:-
                  <div className="ml-8">
                    {v.authorName}{" "}
                    <span className="ml-6">{v.date.slice(0, 10)}</span>{" "}
                  </div>{" "}
                </div>
                <div
                  className="showmore text-gray-400 font-bold text-end hover:cursor-pointer"
                  onClick={() => navigateToFullPage(v._id)}
                >
                  show more...
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default GetMyRecipes;
