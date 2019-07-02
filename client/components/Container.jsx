import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";

const RecipeCard = lazy(() => import('./RecipeCard'));
const ProfileCard = lazy(() => import('./ProfileCard'));
const JobCard = lazy(() => import('./JobCard'));

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'container__section'}>
          <h1 className={'container__h1'}>Popular recipes</h1>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <RecipeCard />
          </Suspense>
        </div>
        <div className={'container__section'}>
          <h1 className={'container__h1'}>Popular chefs</h1>
          <Suspense fallback={<div></div>}>
            <ProfileCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <ProfileCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <ProfileCard />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <ProfileCard />
          </Suspense>
        </div>
        <div className={'container__section'}>
          <h1 className={'container__h1'}>Recent jobs</h1>
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
      </div>
    )
  }
}

export default Container;