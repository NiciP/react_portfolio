import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
return (
    <nav className="header">
        <h1 className="header-title">
            <Link className="text-white hover:text-grey no-underline" to='/'>Nici's Portfolio</Link>
        </h1>
        <ul className="list-reset flex">
            <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
            <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
        </ul>
    </nav>
)
}

export default Header

//   return (
//      <nav className="flex items-center justify-between flex-wrap bg-blue-darkest p-6">
//             <h1 className="text-white text-3xl">My Portfolio</h1>
//    </nav>
//    )
//}