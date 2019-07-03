import React, { Suspense, lazy, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const RecipeCard = lazy(() => import('./RecipeCard'));
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

import '../scss/components/searchpage.scss' 


class SearchPage extends Component {
  constructor() {
    super();
    this.state = {}
  }

  renderSearch = () => {
    return (
      <div className={'searchpage__input__parent'}>
        <input 
          className={'searchpage__input'} 
          id={'searchInput'} 
          autoComplete="off" 
          placeholder={`Search recipes`}/>
      </div>
    )
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    localStorage.setItem('route', 'Recipes');
  }

  render() {
    return (
      <div className={'searchpage'}>
        {this.renderSearch()}
        <div className={'searchpage__content'}>
          <Suspense fallback={<div></div>}>
            <SearchPageHeader />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default SearchPage;
