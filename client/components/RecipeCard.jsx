import React, { Component } from 'react';

import '../scss/components/recipecard.scss';

class RecipeCard extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className={'recipecard'}>
        <figure>
          <img src={'./imgs/food-1.jpg'}/>
        </figure>
        <div className={'recipecard__meta'}>
          <div className={'recipecard__meta__content'}>
            <span className={'recipecard__meta__content--icon'}>
              <svg>
                <use xlinkHref="./sprite.svg#icon-heart" />
              </svg>
            </span>
            <div className={'recipecard__meta__content__text'}>
              <h2>Granola Breakfast with Berries and mint</h2>
              <p>Two Peas and Their Pod</p>
              <span>View</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeCard;