import "./App.css";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Components/John Components/FrontPage";
import RecipeCard from "./Components/RecipeCard";
import GreekPage from "./Components/GreekPage";
import IndianPage from "./Components/IndianPage";
import IndianRecipe from "./Components/IndianRecipe";
import SlovakPage from "./Components/SlovakPage";
import Navbar from "./Components/John Components/Navbar";

function App() {
  // John
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: "z6djbtsjwacx",
    accessToken: "btwYTx3RnBmekwMDx69C54Rk2IiPLtq9qzG8e3e7p1s",
  });
  useEffect(() => {
    async function getRecipes() {
      const entryItems = await client.getEntries();
      /*       console.log(entryItems.items); */
      setRecipes(entryItems.items);
    }
    getRecipes();
    /*   console.log(recipes); */
    const data = recipes;
  }, []);

  //Sonia

  //Vaishali

  return (
    <>
      {/* john */}
      <div className="johnDiv">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="india" element={<IndianPage />} />
          <Route path="greece" element={<GreekPage />} />
          <Route path="slovakia" element={<SlovakPage />} />
          <Route path="recipecard" element={<RecipeCard />} />
          <Route path="frontpage" element={<FrontPage />} />
          <Route path="recipecard/:rec" element={<IndianRecipe />} />
        </Routes>
        ;
      </div>
      {/*  sonia */}

      {/*  {recipes.map((recipe) => (
        <SlovakPage key={recipe.sys.id} recipe={recipe} />
      ))} */}
    </>
  );
}

export default App;
