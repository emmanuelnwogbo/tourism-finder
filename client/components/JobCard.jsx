import React, { Component } from 'react';

import '../scss/components/jobcard.scss';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={'jobcard'}>
        <figure className={'jobcard__figure'}>
          <img src={'./imgs/food-1.jpg'}/>
        </figure>
        <div className={'jobcard__meta'}>
          <p>Restaurant Name</p>
          <p>Role or Job</p>
          <p>Location, Canada</p>
          <p>$32K-$45K(Glassdoor Est.)</p>
          <span className={'jobcard__meta--svg'}>
            <svg>
              <use xlinkHref="./sprite.svg#icon-bookmark" />
            </svg>
          </span>
          <span className={'jobcard__meta--date'}>
            <p>1d</p>
          </span>
        </div>
      </div>
    )
  }
}

export default JobCard