import React, { Suspense, lazy, Component } from 'react';
import faker from 'faker';
import { connect } from 'react-redux';

const RecipeCard = lazy(() => import('./RecipeCard'));

import { searchForRecipe } from '../actions';


class RecipeSection extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.searchForRecipe('pizza');
  }

  renderRecipes = () => {
    const recipes = this.props.state.recipes;
    recipes.length = 8;
    return recipes.map(recipe => {
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

  render() {
    return (
      <div className={'container__section'}>
        <h1 className={'container__h1'}>Popular recipes</h1>
        {this.renderRecipes()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}

export default connect(mapStateToProps, {searchForRecipe})(RecipeSection);