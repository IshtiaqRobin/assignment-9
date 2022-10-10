import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className='flex justify-between mx-auto w-4/5 py-6'>
                <div className=''>
                    <Link to='/home'><p className='text-2xl font-semibold'>Quizizz</p></Link>
                </div>
                <div className='header-link'>
                    <nav className='text-lg font-semibold'>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/about'>About</NavLink>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Header;