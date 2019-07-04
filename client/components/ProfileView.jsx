import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import '../scss/components/profileview.scss';
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

const ProfileView = (props) => {
  console.log(props, 'from profileview')
  return (
    <div className={'profileview'}>
      <Suspense fallback={<div></div>}>
        <SearchPageHeader />
        <div className={'profileview__content'}>
          <div className={'profileview__content__top'}>
            <figure>
              <img src={props.state.profileViewDetails[1]}/>
            </figure>
            <div className={'profileview__content__top--names'}>
              <h2>{props.state.profileViewDetails[2]}</h2>
              <p>{props.state.profileViewDetails[3]}</p>
              <span>Follow</span>
            </div>
          </div>
          <div className={'profileview__content__bottom'}>
            <p>{props.state.profileViewDetails[4]}</p>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}


export default connect(mapStateToProps)(ProfileView);