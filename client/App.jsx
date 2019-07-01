import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";

const Header = lazy(() => import('./components/Header'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchOpen: false,
      searchTerm: 'search'
    };
  }

  renderSearch = () => {
    if (this.state.searchOpen) {
      return (
        <div className={'app__input__parent'}>
          <div className={'app__input__parent--cross'} onClick={this.toggleSearch}>
            <svg>
              <use xlinkHref="./sprite.svg#icon-cross" />
            </svg>
          </div>
          <input className={'app__input'} id={'searchInput'} placeholder={`Search ${this.state.searchTerm}`}/>
        </div>
      )
    }

    return;
  }

  setSearchTerm = (searchTerm) => {
    this.setState({ searchTerm })
  }

  toggleSearch = () => {
    if (this.state.searchOpen) {
      document.getElementById('searchInput').blur();
      return this.setState({ searchOpen: false })
    }

    return this.setState({ searchOpen: true }, () => {
      document.getElementById('searchInput').focus();
    })
  }

  render() {
    return (
      <div className={'app'}>
        {this.renderSearch()}
        <Suspense fallback={<div></div>}>
          <Header 
            searchOpen={this.state.searchOpen}
            toggleSearch={this.toggleSearch}
            setSearchTerm={this.setSearchTerm}/>
        </Suspense>
      </div>
    )
  }
}

export default App;