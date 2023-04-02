import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from './movie.png'



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Pricing", path: "/pricing" },
        { id: 3, name: "Series", path: "/series" },
        { id: 4, name: "Contract", path: "/contract" },
        { id: 5, name: "Login", path: "/login" }
      ]

    return (
       <nav >
           <div onClick={() => setOpen(!open)} className="md:hidden p-2">
        <span>{open === true ? <XMarkIcon className="h-6 w-6 text-primary" /> : <Bars3Icon className="h-6 w-6 text-primary" />}</span>
        </div>
        
        <div className="bg-teal-300">
            
        <ul className={`md:flex z-10 absolute shadow-2xl justify- p-6 rounded ease-in-out md:static gap-6 duration-500 ${open ? 'top-12 start-28': '-start-96'}`}>
        <img className="w-16" src={logo}/>
            {
                routes.map(route => <Link key={route.id} route={route}>

                </Link>)
            }
        </ul>
        </div>
       </nav>
    );
};

export default Navbar;