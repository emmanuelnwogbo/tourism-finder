import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/searchpageheader.scss'

const SearchPageHeader = () => {
  const menuNames = [
    'Jobs',
    'Cooks',
    'Recipes',
    'Add a Recipe',
    'Become a Cook'
  ];

  const returnMenu = () => {
    return menuNames.map(item => {
      if (item === 'Jobs' || item === 'Cooks' || item === 'Recipes') {
        return <Link to={`/${item}`} onClick={() => handleAppNav(item)} style={{
          textDecoration: 'none',
          color: '#1e272e'
        }} key={item}>
          <div 
          className={'header__nav__item'} 
          key={item}><p><span style={{
            display: 'inline-block',
            marginRight: '.2rem'
          }}>Browse</span> {item}</p>
          </div>
        </Link>     
      }
  
      return <div 
        className={'header__nav__item'} 
        key={item}><p>{item}</p></div>
    })
  };

  const handleAppNav = (navName) => {
    if (navName === 'Jobs') {
      return Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'hidden';
    }

    return Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'scroll';
  }

  return (
    <div className={'searchpageheader'}>
    <Link to='/' onClick={() => handleAppNav()} style={{
      textDecoration: 'none',
      color: '#1e272e'
    }}>
    <div className={'header__name'}>
      <p><span style={{
        color: '#c0392b'
      }}>cook</span>
      <span style={{
        color: '#16a085',
        fontWeight: '900'
      }}>Square</span></p>
      </div>
    </Link>
      {returnMenu()}
    </div>
  )
}

export default SearchPageHeader;