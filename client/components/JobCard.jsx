import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/jobcard.scss';
import { returnJobsBoardVal } from '../actions';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntersecting: false
    }
  }

  handleJobClick = (jobData) => {
    this.props.returnJobsBoardVal(jobData)
  }

  componentDidMount() {
    if (this.props.first) {
      this.props.returnJobsBoardVal(this.props.jobData);
    }

    const options = {};
    const observer = new IntersectionObserver((entries, observer) => {
      console.log(entries[0])
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        console.log('intersecting')
        this.setState({ isIntersecting: entries[0].isIntersecting })
      }
    }, options);

    observer.observe(document.getElementById(`${this.props.id}`))    
  }

  render() {
    const {
      id,
      img,
      restaurantName,
      jobName,
      location,
      salary,
      jobData
    } = this.props;

    if (this.state.isIntersecting) {
      return (
        <div className={'jobcard card'} onClick={() => this.handleJobClick(jobData)} id={`${id}`}>
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

    return <div id={`${id}`}></div>
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { returnJobsBoardVal })(JobCard);