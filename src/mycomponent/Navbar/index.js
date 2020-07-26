import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [search,setSearch]=useState(false);

    const submitHandler =(e)=>{
        e.preventDefault();
        alert("searched");
        e.target.reset();
    }

    

    const openSearch =()=>{
        setSearch(true);
    }

    const searchClass = search ? 'designInput active' : 'designInput' 

    return (
        <div className="navbar">

            <ul className="navbarMenu">               
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact">contact us</NavLink></li>
            </ul>
            {search ? (
                <div>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Search" className={searchClass}/>
                        <span onClick={()=>setSearch(false)} style={{cursor: 'pointer'}} className="mr-2">
                            <i className="fas fa-search"></i>
                        </span>
                    </form>                
                </div>
            ) : (
                <div>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Search" className={searchClass}/>
                        <span onClick={openSearch} style={{cursor: 'pointer'}} className="mr-2">
                            <i className="fas fa-search"></i>
                        </span>
                    </form>                
                </div>
            )}

            
            

        </div>
    );
};

export default Navbar;