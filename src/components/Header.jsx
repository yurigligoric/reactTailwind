import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='flex justify-between px-5 py-2 bg-primary text-white w-full z-10'>
            <a href="/" className='logo text-2x1 font-bold text-accent'>Amrin</a>

            {/* Desktop Nav */}
            <nav className='hidden md:block'>
                <ul className='flex'>
                    <li>
                        <a href='/#about'>About</a>
                    </li>
                    <li>
                        <a href='/#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/#blog'>Blog</a>
                    </li>
                    <li>
                        <a href='/#contact'>Contact</a>
                    </li>
                    <li>
                        <a href='/#resume -link' target="_blank" without rel="norefererrer">Resume</a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className='Flex flex-col'>
                    <li>
                        <a href='/#about'>About</a>
                    </li>
                    <li>
                        <a href='/#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/#blog'>Blog</a>
                    </li>
                    <li>
                        <a href='/#Contact'>Contact</a>
                    </li>
                    <li>
                        <a href='/#resume'>Resume</a>
                    </li>
                </ul>
            </nav>
            {/* Toggle Button */}


        </header>
    )
}

export default Header;
