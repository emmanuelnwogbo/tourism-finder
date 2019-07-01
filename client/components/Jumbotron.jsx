import React from 'react';

import '../scss/components/jumbotron.scss'

const Jumbotron = () => {
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
    </div>
  )
}

export default Jumbotron;