import React, { Suspense, lazy, Component } from 'react';
import faker from 'faker';

console.log(faker);

const Header = lazy(() => import('./components/Header'));
const Jumbotron = lazy(() => import('./components/Jumbotron'));
import Container from './components/Container';
import RecipeSearchUi from './components/RecipeSearchUi';

const App = () => {
  return (
    <div className={'app'}>
      <RecipeSearchUi/>
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