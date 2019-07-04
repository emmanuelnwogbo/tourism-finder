import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import faker from 'faker';

const RecipeCard = lazy(() => import('./RecipeCard'));
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

import '../scss/components/searchpage.scss';
import {  searchForRecipe } from '../actions';


class SearchPage extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleSearch = (event) => {
    if (event.key === 'Enter') {
      this.props.searchForRecipe(event.target.value);
    }
  }

  renderSearch = () => {
    return (
      <div className={'searchpage__input__parent'}>
        <input 
          className={'searchpage__input'} 
          id={'searchInput'} 
          autoComplete="off" 
          placeholder={`Search recipes`}
          onKeyDown={this.handleSearch}/>
      </div>
    )
  }

  renderRecipes = () => {
    return this.props.state.recipes.map(recipe => {
      return (
        <Suspense fallback={<div></div>} key={faker.random.uuid()}>
          <RecipeCard 
            id={faker.random.uuid()} 
            publisher={recipe.publisher}
            image={recipe.image_url}
            title={recipe.title}/>
        </Suspense>
      )
    })
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
          {this.renderRecipes()}
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


export default connect(mapStateToProps, {
  searchForRecipe 
})(withRouter(SearchPage));
