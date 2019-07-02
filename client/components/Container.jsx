import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";

const RecipeCard = lazy(() => import('./RecipeCard'));
const ProfileCard = lazy(() => import('./ProfileCard'));

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={'container'}>
        <Suspense fallback={<div></div>}>
          <RecipeCard />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <ProfileCard />
        </Suspense>
      </div>
    )
  }
}

export default Container;