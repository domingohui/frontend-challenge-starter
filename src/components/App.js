import React, { Component } from 'react';
import VisibleHackerList from './VisibleHackerList';
import SearchBar from './SearchBar';
import styles from 'css-loader!../assets/App.css';
import logoSvg from '../assets/logo.svg'
require ('../../node_modules/materialize-css/sass/materialize.scss');

class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className='logo'>
            <img src={logoSvg}/>
          </div>
          <h1>Hack the North Frontend Challenge</h1>
        </header>
        <section>
           <SearchBar />
          <VisibleHackerList />
        </section>
      </div>
    );
  }
}

export default App;
