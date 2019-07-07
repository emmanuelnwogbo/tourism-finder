import React, { Suspense, lazy, Component } from 'react';
import faker from 'faker';

const RecipeCard = lazy(() => import('./RecipeCard'));
const ProfileCard = lazy(() => import('./ProfileCard'));
const JobCard = lazy(() => import('./JobCard'));
import RecipeSection from './RecipeSection'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
     popularChefs: [1, 2, 3, 4, 5, 6, 7, 8],
     recentJobs: [1, 2, 3, 4, 5, 6, 7, 8],
     recipes: [1,2,3,4,5,6]
    }
  }

  renderTopChefs = () => {
    return this.state.popularChefs.map(chef => {
      return (
        <Suspense fallback={<div></div>} key={faker.random.uuid()}>
          <ProfileCard 
          id={faker.random.uuid()}
          name={faker.name.findName()}
          profilePhoto={faker.internet.avatar()}
          job={'Chef'}
          price={Math.floor( Math.random() * 20 )}
          bio={faker.lorem.paragraphs()}/>
        </Suspense>
      )
    })
  }

  renderRecentJobs = () => {
    return this.state.recentJobs.map(job => {
      if (job % 2 === 0) {
        return (
          <Suspense fallback={<div></div>} key={faker.random.uuid()}>
            <JobCard 
              id={faker.random.uuid()}
              img={faker.random.image()}
              restaurantName={faker.company.companyName()} 
              jobName={'Chef'} 
              location={`${faker.address.city()}, ${faker.address.country()}`} 
              salary={faker.random.number()}/>
          </Suspense>
        )
      }
      return (
        <Suspense fallback={<div></div>} key={faker.random.uuid()}>
          <JobCard
            id={faker.random.uuid()}
            img={faker.random.image()} 
            restaurantName={faker.company.companyName()} 
            jobName={'Restaurant Manager'} 
            location={`${faker.address.city()}, ${faker.address.country()}`} 
            salary={faker.random.number()}/>
        </Suspense>
      )
    })
  }

  

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={'container'}>
        <RecipeSection />
        <div className={'container__section'}>
          <h1 className={'container__h1'}>Popular chefs</h1>
          {this.renderTopChefs()}
        </div>
        <div className={'container__section'}>
          <h1 className={'container__h1'}>Recent jobs</h1>
          {this.renderRecentJobs()}
        </div>
      </div>
    )
  }
}

export default Container;