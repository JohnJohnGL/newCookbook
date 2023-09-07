import "./App.css";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import RecipeCard from "./Components/RecipeCard";

function App() {
  // John
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: "z6djbtsjwacx",
    accessToken: "btwYTx3RnBmekwMDx69C54Rk2IiPLtq9qzG8e3e7p1s",
  });

  async function getRecipes() {
    const entryItems = await client.getEntries();

    console.log(entryItems.items);
    setRecipes(entryItems.items);
  }
  useEffect(() => {
    getRecipes();
  }, []); //Sonia

  //Vaishali

  return (
    <>
      {/* john */}
      <h1>{}</h1>
      {/* vaishali */}

      {/* sonia */}
      <div className="sonia-card">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default App;
