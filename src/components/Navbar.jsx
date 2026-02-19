import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-5 lg:gap-25'>
        <NavLink
            className={(e) => e.isActive ? "text-pink-600" : ""}
            to="/">
                Home
        </NavLink>
        <NavLink
            className={(e) => e.isActive ? "text-pink-600" : ""}
            to="/recipes">
                Recipes
        </NavLink>
        <NavLink
            className={(e) => e.isActive ? "text-pink-600" : ""}
            to="/about">
                About
        </NavLink>
        <NavLink
            className={(e) => e.isActive ? "text-pink-600" : ""}
            to="/create-recipe">
                Create
        </NavLink>
        <NavLink
            className={(e) => e.isActive ? "text-pink-600" : ""}
            to="/favorite">
                Favorite
        </NavLink>
    </div>
  )
}

export default Navbar