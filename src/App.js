import React, { Component } from 'react';
import VisibleHackerList from './components/VisibleHackerList';
import './App.css';
import logoSvg from './assets/logo.svg'

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
          <VisibleHackerList />
        </section>
      </div>
    );
  }
}

export default App;
