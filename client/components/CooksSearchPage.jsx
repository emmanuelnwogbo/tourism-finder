import React, { Suspense, lazy, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import faker from 'faker';

const ProfileCard = lazy(() => import('./ProfileCard'));
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

import '../scss/components/searchpage.scss'


class CooksSearchPage extends Component {
  constructor() {
    super();
    this.state = {
      chefs: ['first', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
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

  renderChefs = () => {
    return this.state.chefs.map(chef => {
      return (
        <Suspense fallback={<div></div>} key={faker.random.uuid()}>
          <ProfileCard 
          name={faker.name.findName()}
          profilePhoto={faker.internet.avatar()}
          job={'Chef'}
          price={Math.floor( Math.random() * 20 )}
          bio={faker.lorem.paragraph()}/>
        </Suspense>
      )
    })
  }  

  componentDidMount() {
    window.scrollTo(0, 0)
    localStorage.setItem('route', 'Cooks');
  }

  render() {
    return (
      <div className={'searchpage'}>
        {this.renderSearch()}
        <div className={'searchpage__content'}>
          <Suspense fallback={<div></div>}>
            <SearchPageHeader />
          </Suspense>
          {this.renderChefs()}
        </div>
      </div>
    )
  }
}

export default CooksSearchPage;