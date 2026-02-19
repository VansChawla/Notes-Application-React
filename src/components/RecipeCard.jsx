import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const {id, image, title, desc, chef} = props.recipe;
  return (
    <Link to={`/recipes/details/${id}`} className="duration-150 hover:scale-101 mb-3 block w-[37vw] lg:w-[23vw] rounded overflow-hidden shadow">
      <img className="object-cover w-full h-[14vh] lg:h-[35vh]" src={image} alt="" />
      <h1 className="px-2 lg:mt-2 font-black lg:text-2xl text-lg">{title}</h1>
      <small className="px-2 lg:text-lg text-[15px] text-red-400">{chef}</small>
      <p className="text-[10px] lg:text-sm px-2 pb-3">
        {desc.slice(0, 100)}...<small className="text-blue-400">more</small>
      </p>
    </Link>
  )
}

export default RecipeCard