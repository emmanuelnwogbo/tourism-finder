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
    'Become a Cook'
  ];

  const returnMenu = (props) => {
    return menuNames.map(item => {
      if (item === props.currentRoute || item === localStorage.getItem('route')) {
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
          }}></span>{item}</p>
          </div>
        </Link>     
      }
  
      if (item === 'Become a Cook' && JSON.parse(window.localStorage.getItem('user_details')) === null) {
        return <Link to='/FormViewCook' onClick={() => handleAppNav(item)} style={{
          textDecoration: 'none',
          color: '#1e272e'
        }} key={item}>
          <div 
          className={'header__nav__item'} 
          key={item}><p><span style={{
            display: 'inline-block',
            marginRight: '.2rem'
          }}></span>{item}</p>
          </div>
        </Link>
      }
    })
  };

  console.log(props)

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