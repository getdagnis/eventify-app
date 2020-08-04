import React, { Component } from 'react';
import { Categories } from './components/categories/categories.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      categories: [],
      message: "the.dark.side.of.",
      title: "eventify",
      searchField: "",
      createCategory: "false"
    }
  }


  componentDidMount() {
      fetch('http://localhost:3000/categories.json')
      .then(response => response.json())
      .then(categories => this.setState({ categories: categories }))
  }


  render() {
    const { categories, searchField } = this.state;
    const filteredCategories = categories.filter(category => 
        JSON.stringify(category).toLowerCase().includes(searchField.toLowerCase()),
        () => console.log(filteredCategories)
      )
    let searchInput = <input className="search" type="search" placeholder="Meklē lielās kategorijas..." onChange={ e => 
      this.setState({ searchField: e.target.value })
    } />

    
    return (
      <div className='app'>
        <header className='app-header'>
            <div class="topbar">
              <p>{ this.state.message }<span className="eventify-yellow">{ this.state.title }</span></p>
              { searchInput }
            </div>
            { filteredCategories.length < 1 ? <p>Nav nevienas kategorijas ar nosaukumu <span className="eventify-yellow">{ searchField }</span></p>
              : this.state.createCategory === "true" ? <p>Nestrādā vēl šī funkcija</p>
              : <Categories categories={ filteredCategories } searchField= { searchField } />}
            {
              this.state.createCategory === "false" ?
              <button id="button" class="button" onClick={() => {
                this.setState({ createCategory: "true" });
              }}>Pievieno kategoriju</button> :
              <button id="button" class="button" onClick={() => {
                this.setState({ createCategory: "false", searchField: "" });
              }}>Atjauno</button>
            }
        </header>
      </div>
    )
  }

}

export default App;
