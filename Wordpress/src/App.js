import React, { Component } from 'react';
import axios from 'axios';


import './App.css';


class App extends Component {
state = { pages: [] };
componentWillMount() {
    axios.get('http://localhost:8888/react/wp-json/wp/v2/pages')
    .then(response => this.setState({ pages: response.data }));
  }

renderpages() {
    return this.state.pages.map(page =>
      <div className="PageDetail" key={page.id}>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: page.content.rendered}} />
        </div>
  );
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Wordpress with React</h1>
        </div>

          {this.renderpages()}

      </div>
    );
  }
}

export default App;
