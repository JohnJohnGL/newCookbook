import React from "react";
import { useNavigate } from "react-router-dom";
import FrontPage from "./John Components/FrontPage";
import Navbar from "./John Components/Navbar";
import IndianPage from "./IndianPage";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import SlovakPage from "./SlovakPage";
import { useParams } from "react-router-dom";

export default function RecipeCard() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: "z6djbtsjwacx",
    accessToken: "btwYTx3RnBmekwMDx69C54Rk2IiPLtq9qzG8e3e7p1s",
  });
  useEffect(() => {
    async function getRecipes() {
      const entryItems = await client.getEntries();
      /*     console.log(entryItems.items); */
      setRecipes(entryItems.items);
    }
    getRecipes();
    console.log(recipes);
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrap-s">
        {" "}
        {recipes.map((recipe) => (
          <div className="list-s" key={recipe.sys.id} recipe={recipe}>
            <Link to={"/recipecard/${recipe.sys.id}"}>
              {" "}
              <h1>{recipe.fields.recipeName}</h1>{" "}
              <img
                className="img-s"
                src={recipe.fields.picture.fields.file.url}
              />
            </Link>
          </div>
        ))}
      </div>

      {/*    <div className="card1">
        <h1 className="card-name">Choose your taste</h1>
        <div>
          <button className="buttons-s" onClick={() => navigate("/india")}>
            India
          </button>

          <button className="buttons-s" onClick={() => navigate("/slovakia")}>
            Slovakia
          </button>

          <button className="buttons-s" onClick={() => navigate("/greece")}>
            Greece
          </button>
        </div>
      </div> */}
    </>
  );
}
