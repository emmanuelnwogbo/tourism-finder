import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";
import faker from 'faker';

import '../scss/components/jobssearchpage.scss';
import JobBoardRight from './JobBoardRight';

const JobCard = lazy(() => import('./JobCard'));
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

class JobsSearchPage extends Component {
  constructor() {
    super();
    this.state = {
      jobs: ['first', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      searching: false,
      searchTerm: ''
    }
  }

  search = (event) => {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const val = event.target.value;
      event.target.value = '';
      this.setState({ searching: true }, () => {
        this.setState({ searching: false, searchTerm: `${val} ` })
      })
    }
  }

  renderSearch = () => {
    return (
      <div className={'searchpage__input__parent'}>
        <input 
          onKeyDown={this.search}
          className={'searchpage__input'} 
          id={'searchInput'} 
          autoComplete="off" 
          placeholder={`Search jobs`}/>
      </div>
    )
  }

  setJobData = (jobData) => {
    console.log(jobData)
  }

  renderJobs = () => {
    return this.state.jobs.map(job => {
      if (job === 'first') {
        const jobData = {
          id: faker.random.uuid(),
          img: faker.random.image(),
          restaurantName: faker.company.companyName(),
          jobName: 'Chef',
          location: `${faker.address.city()}, ${faker.address.country()}`,
          salary: faker.random.number(),
          description: faker.lorem.paragraph()
        }
        return (
          <Suspense fallback={<div></div>} key={jobData.id}>
            <JobCard 
              searchTerm={this.state.searchTerm}
              id={jobData.id}
              setJobData={this.setJobData}
              jobData={jobData}
              img={jobData.img}
              restaurantName={jobData.restaurantName} 
              jobName={jobData.jobName} 
              location={jobData.location} 
              salary={jobData.salary}
              first={true}/>
          </Suspense>
        )
      }

      if (job % 2 === 0) {
        const jobData = {
          id: faker.random.uuid(),
          img: faker.random.image(),
          restaurantName: faker.company.companyName(),
          jobName: 'Chef',
          location: `${faker.address.city()}, ${faker.address.country()}`,
          salary: faker.random.number(),
          description: faker.lorem.paragraph()
        }
        return (
          <Suspense fallback={<div></div>} key={jobData.id}>
            <JobCard 
              id={jobData.id}
              setJobData={this.setJobData}
              jobData={jobData}
              img={jobData.img}
              restaurantName={jobData.restaurantName} 
              jobName={jobData.jobName} 
              location={jobData.location} 
              salary={jobData.salary}
              first={false}/>
          </Suspense>
        )
      }

      const jobData = {
        id: faker.random.uuid(),
        img: faker.random.image(),
        restaurantName: faker.company.companyName(),
        jobName: 'Restaurant Manager',
        location: `${faker.address.city()}, ${faker.address.country()}`,
        salary: faker.random.number(),
        description: faker.lorem.paragraph()
      }

      return (
        <Suspense fallback={<div></div>} key={jobData.id}>
          <JobCard 
            id={jobData.id}
            setJobData={this.setJobData}
            jobData={jobData}
            img={jobData.img}
            restaurantName={jobData.restaurantName} 
            jobName={jobData.jobName} 
            location={jobData.location} 
            salary={jobData.salary}
            first={false}
            />
        </Suspense>
      )
    })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    localStorage.setItem('route', 'Jobs');
    Array.from(document.getElementsByTagName('body'))[0].style.overflow = 'hidden'
  }

  render() {
    if (this.state.searching) {
      return <div className={'jobssearchpage'}>{this.renderSearch()}</div>
    }

    return (
      <div className={'jobssearchpage'}>
        {this.renderSearch()}
        <Suspense fallback={<div></div>}>
          <SearchPageHeader />
        </Suspense>
        <div className={'jobssearchpage__content'}>
          <div className={'jobssearchpage__content__left'}>
            {this.renderJobs()}
          </div>
          <JobBoardRight />
        </div>
      </div>
    )    
  }
}

export default JobsSearchPage;