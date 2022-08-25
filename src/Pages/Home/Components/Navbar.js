import React from 'react';
import logo from '../../../images/images/logos/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div class="navbar flex justify-between bg-primary pt-10 px-12">
            <div class="">

                <img src={logo} style={{ width: '150px' }} alt="Logo" />
            </div>

            <div class="font-semibold">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Our Portfolio</a></li>
                    <li><a>Our Team</a></li>
                    <li><a>Contact us</a></li>
                    <li> <Link to='/signup'><a>Sign Up</a></Link></li>
                    <button class="btn btn-secondary px-10 text-white"><Link to='/login'><a>Login</a></Link> </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;