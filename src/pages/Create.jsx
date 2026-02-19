import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [data, setdata] = useContext(recipecontext);

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [chef, setchef] = useState("");
    const [desc, setdesc] = useState("");
    const [ingredient, setingredient] = useState("");
    const [instruction, setinstruction] = useState("");
    const [category, setcategory] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newrecipe = {
            id: nanoid(),
            image: image,
            title: title,
            chef: chef,
            desc: desc,
            ingredient: ingredient,
            instruction: instruction,
            category: category
        }

        const copyrecipes = [...data];
        copyrecipes.push(newrecipe);
        setdata(copyrecipes);
        localStorage.setItem("recipes", JSON.stringify(copyrecipes));

        toast.success("New Recipe added!");

        //Reset
        setimage('');
        settitle('');
        setchef('');
        setdesc('');
        setingredient('');
        setinstruction('');
        setcategory('');

        navigate("/recipes");
    };

    const placeholderImage = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

    return (
        <div className="-mt-10 flex flex-col lg:flex-row w-full min-h-[80vh] p-6 lg:p-10 gap-10 text-white">
            
            {/* LEFT SIDE: The Form */}
            <form
                onSubmit={submitHandler}
                className="flex w-full lg:w-1/2 flex-col gap-5 lg:gap-4 items-center lg:items-start"
            >
                <h1 className="text-3xl mb-2 lg:mb-0 font-bold">Create Recipe</h1>

                <input
                    type="text"
                    placeholder="Enter Image URL"
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-transparent focus:border-pink-500 transition-colors"
                    value={image}
                    onChange={(e) => setimage(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Recipe Title"
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-transparent focus:border-pink-500 transition-colors"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Chef Name"
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-transparent focus:border-pink-500 transition-colors"
                    value={chef}
                    onChange={(e) => setchef(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Recipe description (Short summary)"
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-transparent focus:border-pink-500 transition-colors resize-none h-24"
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Ingredients separated by comma"
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-transparent focus:border-pink-500 transition-colors resize-none h-24"
                    value={ingredient}
                    onChange={(e) => setingredient(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Instructions separated by comma"
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-transparent focus:border-pink-500 transition-colors resize-none h-24"
                    value={instruction}
                    onChange={(e) => setinstruction(e.target.value)}
                    required
                />

                <select 
                    value={category} 
                    onChange={(e) => setcategory(e.target.value)} 
                    className="px-5 w-full font-medium py-2 border border-gray-600 outline-none rounded bg-gray-800 focus:border-pink-500 transition-colors cursor-pointer"
                    required
                >
                    <option value="" disabled>Select a meal type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button className="w-full lg:w-auto px-8 py-2 mt-2 text-lg lg:text-base rounded-full cursor-pointer bg-pink-500 hover:bg-pink-600 font-bold text-white transition-all shadow-lg shadow-pink-500/30 active:scale-95">
                    Save Recipe
                </button>
            </form>

            {/* RIGHT SIDE: Live Preview */}
            {/* hidden on mobile (hidden), shown on desktop (lg:flex) */}
            <div className="hidden lg:flex w-1/2 flex-col items-center justify-start pt-10 sticky top-10 h-max">
                <h2 className="text-xl font-medium text-gray-400 mb-6 tracking-widest uppercase">Live Preview</h2>
                
                {/* The Preview Card (matches your RecipeCard component styling) */}
                <div className="w-[300px] rounded overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
                    <img 
                        className="object-cover w-full h-[25vh]" 
                        src={image || placeholderImage} 
                        alt="Recipe Preview" 
                        // If user types a broken URL, fallback to placeholder
                        onError={(e) => e.target.src = placeholderImage} 
                    />
                    <div className="p-4">
                        <h1 className="font-black text-xl text-white">
                            {title || "Recipe Title"}
                        </h1>
                        <small className="text-pink-500 font-bold">
                            {chef || "Chef Name"}
                        </small>
                        <p className="mt-2 text-gray-400 text-sm break-words">
                            {(desc || "Your recipe description will appear here. Write something delicious to see how it looks!").slice(0, 80)}...
                            <span className="text-blue-400 cursor-pointer ml-1">more</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create;