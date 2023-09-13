import { useParams } from "react-router-dom";

export default function IndianRecipe({ recipes }) {
  const { rec } = useParams();
  console.log(rec);

  const oneRecipe = { recipes }.find((el) => el.rec);

  return <h1>this is a indian recipe</h1>;
}
