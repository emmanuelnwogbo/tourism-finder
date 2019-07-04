import React from 'react';
import { connect } from 'react-redux';

import '../scss/components/jumbotron.scss'
import { returnRecipeSearchUiValue, searchForRecipe } from '../actions';

const Jumbotron = (props) => {

  const openRecipeSearch = () => {
    document.getElementById('recipe-search-interface').style.zIndex = '200';
    document.getElementById('recipe-search-interface').style.opacity = '1'
  }

  const removeRecipeSearchInterface = () => {
    document.getElementById('recipe-search-interface').style.zIndex = '-1';
    document.getElementById('recipe-search-interface').style.opacity = '0';
    document.getElementById('recipe-search').blur()
  }

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      removeRecipeSearchInterface();
      props.searchForRecipe(event.target.value);
    }
  }

  const setRecipeSearchTerm = (event) => {
    console.log(event.target.value);
    const val = event.target.value
    props.returnRecipeSearchUiValue(val);
  }

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
              onClick={openRecipeSearch}
              onChange={setRecipeSearchTerm}
              onKeyDown={handleSearch}
              id={'recipe-search'}/>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}


export default connect(mapStateToProps, { 
  returnRecipeSearchUiValue, 
  searchForRecipe 
})(Jumbotron);