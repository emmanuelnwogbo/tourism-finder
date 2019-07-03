import React, { Suspense, lazy, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const ProfileCard = lazy(() => import('./ProfileCard'));
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

import '../scss/components/searchpage.scss'


class CooksSearchPage extends Component {
  constructor() {
    super();
    this.state = {}
  }

  renderSearch = () => {
    return (
      <div className={'searchpage__input__parent'}>
        <input className={'searchpage__input'} 
          autoComplete="off"
          id={'searchInput'} placeholder={`Search cooks`}/>
      </div>
    )
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className={'searchpage'}>
        {this.renderSearch()}
        <div className={'searchpage__content'}>
          <Suspense fallback={<div></div>}>
            <SearchPageHeader />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <ProfileCard />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default CooksSearchPage;