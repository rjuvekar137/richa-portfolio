import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
    {
        label: 'HOME',
        to: '/home'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'PROJECTS',
        to: '/projects'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    }
]

const NavBar = () => {
    return (
        <div>
            <nav className="navBar">
                <div className="navBarContainer">
                    <Link to={"/"} className='navBarLogo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className='navBarContainerMenu'>
                    {
                        data.map((item, key)=> (
                            <li key={key} className='navBarContainerMenuItem'>
                                <Link className="navBarContainerMenuItemLinks" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};
export default NavBar;