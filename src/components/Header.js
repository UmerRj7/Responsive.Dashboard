import React from 'react'
import './files/header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="header-top">
        <h1 className="logo">
            smrt
        </h1>
        <div className="serach-bar">
        <label className='srch-txt'>Search
            <input type="text" name="name" id='input'/>
        </label>
            <div className='srch-icon'><i class='fa fa-search' ></i></div>
        </div>
        <div className="icons-container">
            
            <Link><i class='fa fa-cog' id='i-1'></i></Link>
            <Link><i class="fa-solid fa-circle" id='i-1'></i></Link>
            <Link><i class="fa-solid fa-circle" id='i-2'></i></Link>
            T.Joblonski
            <time id='time'>11:21pm</time>
            <Link><i class='fa-solid fa-list-check' id='i-2'></i></Link>
        </div>
    </div>
    </>
  )
}

export default Header