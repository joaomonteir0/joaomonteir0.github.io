import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiCode, HiBriefcase, HiChip, HiHome } from 'react-icons/hi'
import { FaSun, FaMoon } from 'react-icons/fa'

function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: HiHome },
    { path: '/projects', label: 'Projects', icon: HiCode },
    { path: '/experience', label: 'Experience', icon: HiBriefcase },
    { path: '/technologies', label: 'Technologies', icon: HiChip },
  ];

  return (
    <div className="navbar bg-base-200 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenu className="h-5 w-5" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            João Monteiro
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`mx-1 ${location.pathname === item.path ? 'btn-primary' : ''}`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button 
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <FaMoon className="w-5 h-5" />
          ) : (
            <FaSun className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar