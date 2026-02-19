import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipe from '../pages/Recipes'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import PageNotFound from '../pages/PageNotFound'
import Favorite from '../pages/Favorite'

const Mainroutes = () => {
  return (
    <div className='mt-15'>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/recipes' element={<Recipes />}></Route>
            <Route path='/recipes/details/:id' element={<SingleRecipe />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/create-recipe' element={<Create />}></Route>
            <Route path='/favorite' element={<Favorite />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>   
    </div>
  )
}

export default Mainroutes