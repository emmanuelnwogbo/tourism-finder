import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/jobcard.scss';
import { returnJobsBoardVal } from '../actions';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleJobClick = (jobData) => {
    this.props.returnJobsBoardVal(jobData)
  }

  componentDidMount() {
    if (this.props.first) {
      this.props.returnJobsBoardVal(this.props.jobData);
      console.log(this.props);
    }
  }

  render() {
    const {
      img,
      restaurantName,
      jobName,
      location,
      salary,
      jobData
    } = this.props;
    return (
      <div className={'jobcard'} onClick={() => this.handleJobClick(jobData)}>
        <figure className={'jobcard__figure'}>
          <img src={img}/>
        </figure>
        <div className={'jobcard__meta'}>
          <p>{restaurantName}</p>
          <p>{jobName}</p>
          <p>{location}</p>
          <p>${salary}</p>
          <span className={'jobcard__meta--svg'}>
            <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
          </span>
          <span className={'jobcard__meta--date'}>
            <p>1d</p>
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { returnJobsBoardVal })(JobCard);