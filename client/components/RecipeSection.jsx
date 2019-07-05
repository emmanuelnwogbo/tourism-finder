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
    return this.props.state.recipes.map(recipe => {
      if (this.props.state.recipes.indexOf(recipe) > 8) {
        return;
      }

      return (
        <Suspense fallback={<div></div>} key={faker.random.uuid()}>
          <RecipeCard
            url={recipe.f2f_url} 
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
    state: state.returnDetails2
  }
}

export default connect(mapStateToProps, {searchForRecipe})(RecipeSection);