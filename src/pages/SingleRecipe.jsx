import { useContext, useEffect, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {
    const [data, setdata] = useContext(recipecontext);
    const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [chef, setchef] = useState("");
    const [desc, setdesc] = useState("");
    const [ingredient, setingredient] = useState("");
    const [instruction, setinstruction] = useState("");
    const [category, setcategory] = useState("");

    const [favorite, setfavorite] = useState(
        JSON.parse(localStorage.getItem("fav")) || []
    );

    useEffect(() => {
        if (recipe) {
            setimage(recipe.image);
            settitle(recipe.title);
            setchef(recipe.chef);
            setdesc(recipe.desc);
            setingredient(recipe.ingredient);
            setinstruction(recipe.instruction);
            setcategory(recipe.category);
        }
    }, [recipe]);

    const updateHandler = (e) => {
        e.preventDefault();

        const updateRecipe = {
            id: recipe.id,
            image: image,
            title: title,
            chef: chef,
            desc: desc,
            ingredient: ingredient,
            instruction: instruction,
            category: category
        };

        const index = data.findIndex((recipe) => params.id == recipe.id);
        const copydata = [...data];
        copydata[index] = updateRecipe;
        
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success("Recipe Updated");
        navigate("/recipes");
    };

    const deleteHandler = (e) => {
        e.preventDefault();
        const filterdata = data.filter((r) => r.id != params.id);
        setdata(filterdata);
        localStorage.setItem("recipes", JSON.stringify(filterdata));
        
        const filterfav = favorite.filter((f) => f.id != recipe?.id);
        setfavorite(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
        
        toast.success("Recipe Deleted");
        navigate("/recipes");
    };

    const FavHandler = () => {
        let copyfav = [...favorite];
        copyfav.push(recipe);
        setfavorite(copyfav);
        localStorage.setItem("fav", JSON.stringify(copyfav));
        toast.success("Added to Favorites")
    };

    const UnfavHandler = () => {
        const filterfav = favorite.filter((f) => f.id != recipe?.id);
        setfavorite(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
        toast.info("Removed from Favorites")
    };

    return recipe ? (
        <div className="flex flex-col lg:flex-row w-full p-5 lg:p-10 text-white gap-10">
            
            {/* LEFT SIDE: Preview */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-4xl mb-4 font-black">{recipe.title}</h1>
                
                {/* Fixed image width */}
                <img className="w-full lg:w-[80%] h-[30vh] lg:h-[40vh] object-cover rounded" src={recipe.image} alt="" />
                
                {/* Cleaned up the heart icon positioning using simple flexbox */}
                <div className="flex justify-between items-center w-full lg:w-[80%] mt-3 mb-2">
                    <h3 className="text-2xl text-red-400 font-bold">by {recipe.chef}</h3>
                    {favorite.find((f) => f.id == recipe?.id) ? (
                        <i onClick={UnfavHandler} className="text-3xl text-red-500 cursor-pointer ri-heart-3-fill"></i>
                    ) : (
                        <i onClick={FavHandler} className="text-3xl text-red-500 cursor-pointer ri-heart-3-line"></i>
                    )}
                </div>
                
                <p className="w-full lg:w-[80%] mt-2 text-gray-300">{recipe.desc}</p>
            </div>

            {/* RIGHT SIDE: The Form */}
            <form
                onSubmit={updateHandler}
                className="flex w-full lg:w-1/2 flex-col gap-4"
            >
                {/* Changed w-[74vw] to w-full or lg:w-[80%] so it doesn't break mobile screens */}
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-transparent"
                    value={image}
                    onChange={(e) => setimage(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Recipe Title"
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-transparent"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Chef Name"
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-transparent"
                    value={chef}
                    onChange={(e) => setchef(e.target.value)}
                />

                <textarea
                    placeholder="Recipe start from here"
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-transparent h-24"
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}
                />

                <textarea
                    placeholder="Ingredients seperate by comma"
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-transparent"
                    value={ingredient}
                    onChange={(e) => setingredient(e.target.value)}
                />

                <textarea
                    placeholder="Instructions seperate by comma"
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-transparent"
                    value={instruction}
                    onChange={(e) => setinstruction(e.target.value)}
                />

                <select 
                    value={category} 
                    onChange={(e) => setcategory(e.target.value)} 
                    className="px-5 w-full lg:w-[80%] font-medium py-2 border border-gray-500 outline-none rounded bg-[#1e2330]"
                >
                    <option value="" disabled>Select a meal type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <div className="flex justify-center lg:justify-start gap-4 mt-2 mb-10">
                    <button type="submit" className="px-6 py-2 rounded-full cursor-pointer bg-blue-300 hover:bg-blue-400 font-bold text-gray-800">
                        Update
                    </button>
                    {/* Make sure type="button" is here so it doesn't trigger the updateHandler */}
                    <button type="button" onClick={deleteHandler} className="px-6 py-2 rounded-full cursor-pointer bg-red-400 hover:bg-red-500 font-bold text-gray-800">
                        Delete
                    </button>
                </div>
            </form>
        </div>
    ) : "Loading...";
};

export default SingleRecipe;