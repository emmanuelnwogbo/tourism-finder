import React, { Component } from 'react';

import '../scss/components/profilecard.scss';

class ProfileCard extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const {
      profilePhoto, 
      name, 
      job, 
      bio, 
      specialities,
      price
    } = this.props;
    return (
      <div className={'profilecard'}>
        <div className={'profilecard__top'}>
          <figure>
            <img src={profilePhoto}/>
          </figure>
          <span>Follow</span>
        </div>
        <div className={'profilecard__middle'}>
          <h2>{name}</h2>
          <p>{job}</p>
          <p>{bio.substring(0, 200)}</p>
        </div>
        <div className={'profilecard__bottom'}>
          <p>Specialties</p>
          <p>Vegeterian, Dieting, Gluten free diets</p>
        </div>
        <div className={'profilecard__price'}>
          <p>Price</p>
          <p>${price}/hr</p>
        </div>
      </div>
    )
  }
}

export default ProfileCard