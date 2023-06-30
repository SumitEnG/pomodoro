import React from "react";
import Nav from "../utils/Nav";
import FavRecipes from "../utils/FavRecipes";

function FavList() {
  return (
    <div className="main md: bg-white">
      <div className="container max-w-md mx-auto h-screen bg-purple-400 flex flex-col ">
        <Nav />
        <div className="recipe-heading font-extrabold italic text-lg text-center p-2">
          fAV Recipes
        </div>
        <div
          className={`${
            localStorage.getItem("token") ? "blur-none" : "blur-lg"
          } recipe h-4/5 overflow-y-scroll scroll-smooth`}
        >
          <FavRecipes />
        </div>
        <div className="grey-space h-0.5 bg-gray-500"></div>
      </div>
    </div>
  );
}

export default FavList;
