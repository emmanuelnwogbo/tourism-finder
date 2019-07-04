import React, { Component } from 'react';

import '../scss/components/recipecard.scss';

class RecipeCard extends Component {
  constructor() {
    super();
    this.state = {
      isIntersecting: false
    }
  }

  componentDidMount() {
    const options = {};
    const observer = new IntersectionObserver((entries, observer) => {
      console.log(entries[0])
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        this.setState({ isIntersecting: entries[0].isIntersecting })
      }
    }, options);

    observer.observe(document.getElementById(`${this.props.id}`))      
  }

  render() {
    const {
      id,
      publisher,
      image,
      title
    } = this.props;

    if (this.state.isIntersecting) {
      return (
        <div className={'recipecard card'} id={`${id}`}>
          <figure>
            <img src={image}/>
          </figure>
          <div className={'recipecard__meta'}>
            <div className={'recipecard__meta__content'}>
              <span className={'recipecard__meta__content--icon'}>
                <svg>
                  <use xlinkHref="./sprite.svg#icon-heart" />
                </svg>
              </span>
              <div className={'recipecard__meta__content__text'}>
                <h2>{title}</h2>
                <p>{publisher}</p>
                <span>View</span>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return <div id={`${id}`}></div>
  }
}

export default RecipeCard;