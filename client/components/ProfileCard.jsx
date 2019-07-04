import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../scss/components/profilecard.scss';
import { clickedCookDetails } from '../actions';

class ProfileCard extends Component {
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
      profilePhoto, 
      name, 
      job, 
      bio, 
      specialities,
      price
    } = this.props;
    if (this.state.isIntersecting) {
      return (
        <div className={'profilecard card'} id={`${id}`}>
          <div className={'profilecard__top'}>
            <figure>
              <img src={profilePhoto}/>
            </figure>
            <span>Follow</span>
          </div>
          <div className={'profilecard__middle'}>
            <h2>{name}</h2>
            <p>{job}</p>
          </div>
          <div className={'profilecard__bottom'}>
            <p>Specialties</p>
            <p>Vegeterian, Dieting, Gluten free diets</p>
          </div>
          <div className={'profilecard__price'}>
            <p>Price</p>
            <p>${price}/hr</p>
          </div>
          <Link to='/ProfileView' style={{
            textDecoration: 'none',
            color: '#1e272e'
          }} onClick={() => this.props.clickedCookDetails([id,
            profilePhoto, 
            name, 
            job, 
            bio, 
            specialities,
            price])}><span className={'profilecard--viewbtn'}>view</span></Link>
        </div>
      )
    }

    return (
      <div id={`${id}`}></div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { clickedCookDetails })(ProfileCard);