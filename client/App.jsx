import React, { Suspense, lazy, Component } from 'react';
import faker from 'faker';

console.log(faker);

const Header = lazy(() => import('./components/Header'));
const Jumbotron = lazy(() => import('./components/Jumbotron'));
import Container from './components/Container';
import RecipeSearchUi from './components/RecipeSearchUi';

const openNav = () => {
  document.getElementById('header').style.transform = `translateX(0)`;
  document.getElementById('nav_close').style.transform = `translateX(0)`
}

const closeNav = () => {
  document.getElementById('header').style.transform = `translateX(-100%)`;
  document.getElementById('nav_close').style.transform = `translateX(100%)`
}

const App = () => {
  return (
    <div className={'app'}>
      <RecipeSearchUi/>
      <div className={'sidenavBurger'} onClick={openNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={'sidenavBurger__close'} id={'nav_close'} onClick={closeNav}></div>
      <Suspense fallback={<div></div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Jumbotron />
      </Suspense>
      <Container />
    </div>
  )
}

export default App;