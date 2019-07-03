import React from 'react';

import '../scss/components/jumbotron.scss'

const Jumbotron = ({ 
  setRecipeSearchTerm, 
  setRecipeSearched, 
  recipeSearchTerm,
  handleSearch 
}) => {
  return (
    <div className={'jumbotron'}>
      <div className={'jumbotron__words'}>
        <div className={'jumbotron__words__content'}>
          <p>Become a part of our growing</p>
          <p>Community of Chefs, Cooking Enthusiasts</p>
          <p>and Food aficionados</p>
          <span className={'jumbotron__words__content--btn'}>Join</span>
        </div>
      </div>
      <figure>
        <img src={'./imgs/food-1.jpg'}/>
      </figure>
      <figure>
        <img src={'./imgs/bro-cooking.jpg'}/>
      </figure>
      <figure>
        <img src={'./imgs/people-cooking.jpg'}/>
      </figure>
      <div className={'jumbotron__search'}>
        <div className={'jumbotron__search__body'}>
          <input placeholder={'Search recipes'} 
              autoComplete="off"
              onClick={setRecipeSearched}
              value={recipeSearchTerm}
              onKeyDown={handleSearch}
              onChange={setRecipeSearchTerm}
              id={'recipe-search'}/>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;