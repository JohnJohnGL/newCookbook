import React from "react";
/* import Navbar from "./Navbar"; */

export default function RecipeCard({ recipe }) {
  return (
    <>
      <div className="container">
        <div id="recipes">
          <div className="card1">
            <h1 className="card-name">{recipe.fields.recipeName}</h1>

            <div className="card-body">
              <img
                src={recipe.fields.picture.fields.file.url}
                className="card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
