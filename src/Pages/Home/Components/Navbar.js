import React from 'react';
import logo from '../../../images/images/logos/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {

    const [user] = useAuthState(auth)
    console.log(user);
    const handelLogout = () => {
        signOut(auth)
    }
    return (
        <div class="navbar flex justify-between bg-primary pt-10 px-12">
            <div class="">

                <img src={logo} style={{ width: '150px' }} alt="Logo" />
            </div>

            <div class="font-semibold">
                <ul class="menu menu-horizontal p-0">
                    <li><NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "btn btn-secondary px-10 text-white" : ''
                        }
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive ? "btn btn-secondary px-10 text-white" : undefined
                        }
                    >
                        Our Portfolio
                    </NavLink></li>
                    <li><NavLink
                        to="/team"
                        className={({ isActive }) =>
                            isActive ? "btn btn-secondary px-10 text-white" : undefined
                        }
                    >Our Team
                    </NavLink></li>
                    <li><NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "btn btn-secondary px-10 text-white" : undefined
                        }
                    >
                        Contact us
                    </NavLink></li>
                    {
                        user ? <button onClick={handelLogout} className='bg-red-400 px-5 rounded-lg'><Link to='/login'><a>Logout</a></Link> </button> : <><button><Link to='/login'><a>Login</a></Link> </button>
                            <li> <Link to='/signup'><a>Sign Up</a></Link></li></>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;