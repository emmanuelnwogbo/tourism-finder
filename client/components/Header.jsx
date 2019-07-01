import React, { Suspense, lazy, Component } from 'react';

import '../scss/components/header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      signedUp: true,
      headerMenuItems: [
        'Jobs',
        'Cooks',
        'Recipes',
        'Add a Recipe',
        'Become a Cook'
      ]
    }
  }

  handleMenuClick = (item) => {
    const searchTerm = item;
    this.props.toggleSearch();
    this.props.setSearchTerm(searchTerm)
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
      if (item === 'Jobs' || item === 'Cooks' || item === 'Recipes') {
        return <div 
          className={'header__nav__item'} 
          key={item}
          onClick={() => this.handleMenuClick(item)}><p><span style={{
            display: 'inline-block',
            marginRight: '.2rem'
          }}>Browse</span> {item}</p></div>     
      }

      return <div 
        className={'header__nav__item'} 
        key={item}><p>{item}</p></div>
    })
  }

  render() {
    return (
      <div className={'header'}>
        <div className={'header__name'}>
          <p><span style={{
            color: '#c0392b'
          }}>tourism</span>
          <span style={{
            color: '#16a085',
            fontWeight: '900'
          }}>Cook</span></p>
        </div>
        <div className={'header__nav'}>
          {this.renderHeaderMenuItems()}
          {this.renderSignUpBtn()}
        </div>
      </div>
    )
  }
}

export default Header;