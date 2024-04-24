import React, {useState} from 'react';
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
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
];

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggle = () => {
        setToggleIcon(!toggleIcon);
    };

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
                <div className='navIcon' onClick={handleToggle}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    );
};
export default Navbar;