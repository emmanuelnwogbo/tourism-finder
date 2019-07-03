import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";

import '../scss/components/jobssearchpage.scss'

const JobCard = lazy(() => import('./JobCard'));
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

class JobsSearchPage extends Component {
  constructor() {
    super();
    this.state = {}
  }

  renderSearch = () => {
    return (
      <div className={'searchpage__input__parent'}>
        <input 
          className={'searchpage__input'} 
          id={'searchInput'} 
          autoComplete="off" 
          placeholder={`Search jobs`}/>
      </div>
    )
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className={'jobssearchpage'}>
        {this.renderSearch()}
        <Suspense fallback={<div></div>}>
          <SearchPageHeader />
        </Suspense>
        <div className={'jobssearchpage__content'}>
          <div className={'jobssearchpage__content__left'}>
            <Suspense fallback={<div></div>}>
              <JobCard />
            </Suspense>
            <Suspense fallback={<div></div>}>
              <JobCard />
            </Suspense>
            <Suspense fallback={<div></div>}>
              <JobCard />
            </Suspense>
            <Suspense fallback={<div></div>}>
              <JobCard />
            </Suspense>
            <Suspense fallback={<div></div>}>
              <JobCard />
            </Suspense>
            <Suspense fallback={<div></div>}>
              <JobCard />
            </Suspense>
          </div>
          <div className={'jobssearchpage__content__right'}>
            <figure>
              <img src={'./imgs/food-1.jpg'}/>
            </figure>
            <div className={'jobssearchpage__content__right--header'}>
              <div className={'jobssearchpage__content__right--meta'}>
                <h2>Administrative Assistant</h2>
                <p>Tru Vue– Faribault, MN</p>
                <p>$32K-$45K (Glassdoor est.)</p>
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
              <p>Provide administrative support services for Tru Vue-Faribault Executives, Leadership Team, and Human Resources. Present a positive first impression to visitors, clients, customers, and employees on the phone or face to face by greeting, welcoming, and directing them appropriately. Assist team members in administrative projects, answer employee inquiries or direct them appropriately. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobsSearchPage;