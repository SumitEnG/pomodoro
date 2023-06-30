import React from "react";
import { Button } from "@mui/material";
import { AddTask } from "@mui/icons-material";
import RecipyCard from "../utils/RecipyCard";
import Nav from "../utils/Nav";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="main md: bg-white">
      <div className="container max-w-md mx-auto h-screen bg-purple-400 flex flex-col ">
        <Nav />
        <div className="recipe-heading font-extrabold italic text-lg text-center p-2">
          Recipes
        </div>
        <div
          className={`${
            localStorage.getItem("token") ? "blur-none" : "blur-lg"
          } recipe h-4/5 overflow-y-scroll scroll-smooth`}
        >
          <RecipyCard />
        </div>
        <div className="grey-space h-0.5 bg-gray-500"></div>
        <div className="btn p-4 flex justify-center">
          {localStorage.getItem("token") ? (
            <Button
              color="primary"
              variant="outlined"
              className=""
              onClick={() => {
                navigate("/addRecipe");
              }}
            >
              add a recipe
              <AddTask />
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
