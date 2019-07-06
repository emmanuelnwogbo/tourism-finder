import React, { Suspense, lazy, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../scss/components/header.scss';
import { returnClickedRoute } from '../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      signedUp: false,
      headerMenuItems: [
        'Jobs',
        'Cooks',
        'Recipes',
        'Become a Cook'
      ]
    }
  }

  renderSignUpBtn = () => {
    if (this.state.signedUp) {
      return (
        <div className={'header__profile header__nav__item'}>
          <figure>
            <img src={'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
          </figure>
          <div className={'header__profile__menu'}>
            <div className={'header__profile__menu--item'}><p>Become a Cook</p></div>
            <div className={'header__profile__menu--item'}><p>Bookmarks</p></div>
            <div className={'header__profile__menu--item'}><p>Sign Out</p></div>
          </div>
        </div>
      )
    }

    return <div className={'header__nav__item'}><p>Sign Up</p></div>
  }

  renderHeaderMenuItems = () => {
    return this.state.headerMenuItems.map(item => {
      if (item === this.props.state.currentRoute) {
        return;
      }
      if (item === 'Jobs' || item === 'Cooks' || item === 'Recipes') {
        return <Link to={`/${item}`} onClick={() => this.handleAppNav(item)} style={{
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

      if (item === 'Become a Cook') {
        return <Link to='/FormViewCook' style={{
          textDecoration: 'none',
          color: '#1e272e'
        }} key={item}><div 
          className={'header__nav__item'} 
          key={item}><p>{item}</p></div>
        </Link>
      }
    })
  }

  handleAppNav = (navName) => {
    this.props.returnClickedRoute(navName)
    if (navName === 'Jobs') {
      return Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'hidden';
    }

    Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'scroll';
    Array.from(document.getElementsByTagName('body'))[0].style.overflowX = 'hidden';
  }

  render() {
    console.log(this.props)
    return (
      <div className={'header'}>
        <Link to='/' style={{
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
          <div className={'header__nav'}>
            {this.renderHeaderMenuItems()}
            {this.renderSignUpBtn()}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}

export default connect(mapStateToProps, { returnClickedRoute })(Header);