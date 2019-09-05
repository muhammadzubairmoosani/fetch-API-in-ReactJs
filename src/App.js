import React from 'react';
import TableComponent from './component/tableComponent';
import AlbumComponent from './component/albumComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      display: 'd-none'
    }
    this.getUserId = this.getUserId.bind(this);
  }

  getUserId(id) {
    this.setState({ userId: id })
  }

  render() {
    return (
      <Router>
        <div className="App text-center">
          <Route path='/' exact component={() =>
            <TableComponent
              getUserId={this.getUserId}
              btnHandle={this.btnHandle}
            />} />
          <Route path='/album' component={() =>
            <AlbumComponent id={this.state.userId} />} />
        </div>
      </Router>
    );
  }
}

export default App;

