import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SpecificRecipe from "./pages/specificRecipe";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FavList from "./pages/FavList";
import MyRecipe from "./pages/myRecipe";
import SpecificForFav from "./pages/specificForFav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/specificRecipe" element={<SpecificRecipe />} />
          <Route exact path="/specificForFav" element={<SpecificForFav />} />
          <Route exact path="/addRecipe" element={<AddRecipe />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myList" element={<MyRecipe />} />
          <Route exact path="/fav" element={<FavList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
