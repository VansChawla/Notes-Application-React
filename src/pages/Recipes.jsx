import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [ data ] = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className="w-full flex flex-wrap gap-5 lg:pl-12 lg:gap-10">{data.length > 0 ? renderrecipes : "No recipes found!"}</div>
  )
}

export default Recipes