import React from 'react';
import './App.css';
import CardComponent from './cardImgpage';

import {
  Button, Table
} from 'reactstrap';

function componentWillMount() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => this.setState({ fetchValue: data }))
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchValue: [],
      album: [],
      counter: 1,
    }
  }

  showPhoto(id) {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
      .then(res => res.json()).then(data => this.setState({ album: data }))
      componentWillMount()
  }

  render() {
    return (
      <div className="App">
        <Table>
          <tr>
            <th>User-ID</th>
            <th>Album Title</th>
            <th>View Album</th>
          </tr>
          {this.state.fetchValue.map((item) =>
            item.userId === this.state.counter &&
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>
                <Button onClick={() => this.showPhoto(item.userId)}>View</Button>
              </td>
              <td className='d-none'>{this.state.counter++}</td>
            </tr>
          )}
        </Table>
        <CardComponent
          value={this.state.album}
        />
      </div>
    );
  }
}

export default App;

