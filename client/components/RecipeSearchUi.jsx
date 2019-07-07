import React from 'react';
import { connect } from 'react-redux';

const RecipeSearchUi = (props) => {

  const removeRecipeSearchInterface = (event) => {
    document.getElementById('recipe-search-interface').style.zIndex = '-1';
    document.getElementById('recipe-search-interface').style.opacity = '0';
    document.getElementById('recipe-search').blur()
  }

  const keepOpen = (event) => {
    document.getElementById('recipe-search').focus();
    if (event.target.classList.contains('close-recipe-search')) {
      document.getElementById('recipe-search').blur()
    }
  }

  return (
    <div className={'app__recipesearch_Ui'} onClick={keepOpen} id={'recipe-search-interface'}>
      <div className={'app__recipesearch_Ui--close close-recipe-search'} onClick={removeRecipeSearchInterface}>
        <svg className={'close-recipe-search'}>
          <use className={'close-recipe-search'} xlinkHref="./sprite.svg#icon-cross" />
        </svg>
      </div>
      <div className={'app__recipesearch_Ui--text'} style={{
        width: '90%',
        wordWrap: 'break-word'
      }}>
        <p>{props.state.recipeSearchUiVal}<span className={'app__recipesearch_Ui--cursor'}>|</span></p>
      </div>
    </div>
  ); 
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}


export default connect(mapStateToProps)(RecipeSearchUi);