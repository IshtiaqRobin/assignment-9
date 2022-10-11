import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header w-full bg-slate-100 mb-12'>
            <div className='flex sm:justify-between sm:w-full md:w-4/5 lg:justify-between mx-auto lg:w-4/5 py-6'>
                <div className=''>
                    <Link to='/home'><p className='text-5xl text-sky-600 font-semibold'>Quizizz</p></Link>
                </div>
                <div className='header-link'>
                    <nav className='text-lg text-sky-600 font-semibold'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Header;