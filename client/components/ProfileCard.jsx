import React, { Component } from 'react';

import '../scss/components/profilecard.scss';

class ProfileCard extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className={'profilecard'}>
        <div className={'profilecard__top'}>
          <figure>
            <img src={'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
          </figure>
          <span>Follow</span>
        </div>
        <div className={'profilecard__middle'}>
          <h2>Vinnie Marthew</h2>
          <p>Chef, Restaurant Manager</p>
          <p>Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
        </div>
        <div className={'profilecard__bottom'}>
          <p>Specialties</p>
          <p>Vegeterian, Dieting, Gluten free diets</p>
        </div>
        <div className={'profilecard__price'}>
          <p>Price</p>
          <p>$59/hr</p>
        </div>
      </div>
    )
  }
}

export default ProfileCard