import RecipeCard from "../components/RecipeCard";

const Favorite = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const validFavorites = favorite.filter(
    (recipe) => recipe && recipe.id && recipe.title && recipe.image
  );

  const renderrecipes = validFavorites.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className="w-full flex flex-wrap gap-5 lg:pl-12 lg:gap-10">{validFavorites.length > 0 ? renderrecipes : "No recipes found!"}</div>
  )
}

export default Favorite