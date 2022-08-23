import React from 'react';
import logo from '../../../images/images/logos/logo.png'

const Navbar = () => {

    return (
        <div class="navbar flex justify-between bg-primary pt-10 px-20">
            <div class="">

                <img src={logo} style={{ width: '150px' }} alt="Logo" />
            </div>

            <div class="font-semibold">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Our Portfolio</a></li>
                    <li><a>Our Team</a></li>
                    <li><a>Contact us</a></li>
                    <button class="btn btn-secondary px-10 text-white">Login </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;