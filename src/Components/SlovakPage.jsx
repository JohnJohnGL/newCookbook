import { useState } from "react";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";

export default function SlovakPage(props) {
  console.log(props);
  return (
    <>
      <div className="main-s">
        <div className="container-s">
          <div className="card-s">
            <div className="title-s">
              <NavLink to="slovakia">
                <h1>{props.recipe.fields.recipeName}</h1>
              </NavLink>
            </div>
            <img
              className="img-s"
              src={props.recipe.fields.picture.fields.file.url}
            />
          </div>
        </div>
      </div>
    </>
  );
}
