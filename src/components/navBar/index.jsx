import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const navData = [
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
                <div className="navBar__Container">
                    <Link to="/" className="navBar__Container__Logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className= {`navBar__Container__Menu ${toggleIcon ? 'active' : ""} `}>
                    {navData.map((item, key) => (
                        <li key={key} className="navBar__Container__Menu__Item">
                            <Link className="navBar__Container__Menu__Item__Links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggle}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;