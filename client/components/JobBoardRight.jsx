import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobBoardRight extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    console.log('board props', this.props)
  }

  render() {
    return (
      <div className={'jobssearchpage__content__right'}>
      <figure>
        <img src={this.props.state.jobData.img}/>
      </figure>
      <div className={'jobssearchpage__content__right--header'}>
        <div className={'jobssearchpage__content__right--meta'}>
          <h2>{this.props.state.jobData.jobName}</h2>
          <p>{this.props.state.jobData.location}</p>
          <p>${this.props.state.jobData.salary}</p>
        </div>
        <div className={'jobssearchpage__content__right--btns'}>
          <span>Apply Now</span>
          <span>
            <svg>
              <use xlinkHref="./sprite.svg#icon-heart-outlined" />
            </svg>
            Save
          </span>
        </div>
      </div>
      <div className={'jobssearchpage__content__right--description'}>
        <h2>Description:</h2>
        <p>{this.props.state.jobData.description}</p>
      </div>
    </div>      
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}


export default connect(mapStateToProps)(JobBoardRight);