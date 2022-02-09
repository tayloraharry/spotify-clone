import React from 'react';
import './header.css';
import {IoMdSearch} from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import User from '../user';



const Header = () => { 
  return <div className="header">
    <div className="header__left">
      <IoMdSearch/>
      <input type="text" placeholder='Search for Artists, Songs or Podcast' />
    </div>
    <div className="header__right">
      <User/>
    </div>
  </div>;
}

export default Header;
