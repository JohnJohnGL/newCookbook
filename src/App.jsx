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
  useEffect(() => {
    async function getRecipes() {
      const entryItems = await client.getEntries();
      console.log(entryItems.items);
      setRecipes(entryItems.items);
    }
    getRecipes();
  }, []);

  //Vaishali

  //Sonia

  return (
    <>
      {/* john */}
      <h1>{}</h1>
      {/* vaishali */}

      {/* sonia */}
    </>
  );
}

export default App;
