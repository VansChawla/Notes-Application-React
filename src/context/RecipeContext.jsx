import { createContext, useEffect, useState } from "react"

export const recipecontext = createContext();

const RecipeContext = (props) => {
    const [data, setdata] = useState(() => {
      const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
      
      if (savedRecipes && savedRecipes.length > 0) {
          return savedRecipes;
      }
      
      return [{
          id: "default-1", // MUST have an ID for your RecipeCard links
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Classic Avocado Toast",
          chef: "Gordon Ramsay",
          desc: "A delicious and quick avocado toast perfect for any morning.", // MUST have desc for .slice()
          ingredient: "Bread, Avocado, Lemon, Salt, Pepper, Egg",
          instructions: "1. Toast the bread until golden brown.\n2. Mash the avocado with lemon juice, salt, and pepper.\n3. Spread the mixture onto the toast.\n4. Top with poached egg and chili flakes.\n5. Serve immediately.",
          category: "breakfast"
      }];
  });

    useEffect(() => {
      setdata(JSON.parse(localStorage.getItem("recipes")) || []); 
    },[])
    
  return (
    <recipecontext.Provider value={[data, setdata]}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext

// {
//   id: 1,
//   image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   title: "Classic Avocado Toast",
//   chef: "Gordon Ramsay",
//   instructions: "1. Toast the bread until golden brown.\n2. Mash the avocado with lemon juice, salt, and pepper.\n3. Spread the mixture onto the toast.\n4. Top with poached egg and chili flakes.\n5. Serve immediately.",
//   desc: "Toast the bread until golden brown op with poached egg and chili flakes. Toast the bread until golden brown op with poached egg and chili flakes. Toast the bread until golden brown op with poached egg and chili flakes."
// }