import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";

const Header = lazy(() => import('./components/Header'));
const Jumbotron = lazy(() => import('./components/Jumbotron'));
import Container from './components/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipeSearchClicked: false,
      recipeSearchTerm: ''
    };
  }

  handleSearch = (event) => {
    if (event.key === 'Enter') {
      this.setRecipeSearched();
    }
  }

  setRecipeSearchTerm = (event) => {
    const inputVal = event.target.value
    this.setState({
      recipeSearchTerm: inputVal
    })
  }

  setRecipeSearched = () => {
    if (this.state.recipeSearchClicked) {
      return this.setState({
        recipeSearchClicked: false
      }, () => document.getElementById('recipe-search').blur())
    }

    return this.setState({
      recipeSearchClicked: true
    })
  }

  renderRecipeSearchUi = () => {
    if (this.state.recipeSearchClicked) {
      return (
        <div className={'app__recipesearch_Ui'} onClick={() => document.getElementById('recipe-search').focus()}>
          <div className={'app__recipesearch_Ui--close'} onClick={this.setRecipeSearched}>
            <svg>
              <use xlinkHref="./sprite.svg#icon-cross" />
            </svg>
          </div>
          <div className={'app__recipesearch_Ui--text'} style={{
            width: '90%',
            wordWrap: 'break-word'
          }}>
            <p>{this.state.recipeSearchTerm}<span className={'app__recipesearch_Ui--cursor'}>|</span></p>
          </div>
        </div>
      )
    }

    return;
  }

  render() {
    return (
      <div className={'app'}>
        {this.renderRecipeSearchUi()}
        <Suspense fallback={<div></div>}>
          <Header />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Jumbotron 
            setRecipeSearchTerm={this.setRecipeSearchTerm} 
            setRecipeSearched={this.setRecipeSearched}
            recipeSearchTerm={this.state.recipeSearchTerm}
            handleSearch={this.handleSearch}/>
        </Suspense>
        <Container />
      </div>
    )
  }
}

export default App;