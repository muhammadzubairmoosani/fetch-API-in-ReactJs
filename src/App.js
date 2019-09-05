import React from 'react';
import TableComponent from './tableComponent';
import AlbumComponent from './albumComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: ''
    }
    this.fn = this.fn.bind(this)
  }
  fn(id) {
    this.setState({ userId: id })
  }

  render() {
    return (
      <Router>
        <div className="App text-center">
          <Route path='/' exact component={() => <TableComponent fn={this.fn} />} />
          <Route path='/album' component={() => <AlbumComponent id={this.state.userId} />} />
        </div>
      </Router>
    );
  }
}

export default App;

