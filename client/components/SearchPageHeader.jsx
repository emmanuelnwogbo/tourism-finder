import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../scss/components/searchpageheader.scss'
import { returnClickedRoute } from '../actions';

const SearchPageHeader = (props) => {
  const menuNames = [
    'Jobs',
    'Cooks',
    'Recipes',
    'Add a Recipe',
    'Become a Cook'
  ];

  const returnMenu = (props) => {
    return menuNames.map(item => {
      if (item === props || item === localStorage.getItem('route')) {
        return;
      }
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
    props.returnClickedRoute(navName)
    if (navName === 'Jobs') {
      return Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'hidden';
    }

    Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'scroll';
    Array.from(document.getElementsByTagName('body'))[0].style.overflowX = 'hidden';
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
      {returnMenu(props.state.currentRoute)}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}

export default connect(mapStateToProps, { returnClickedRoute })(SearchPageHeader);