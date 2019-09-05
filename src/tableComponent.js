import React from 'react';
import AlbumComponent from './albumComponent'
import { Button, Table } from 'reactstrap';

class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            fetchData: [],
            counter: 1,
            hide: '',
            show: 'd-none'
        }
        this.getAlbumFromId = this.getAlbumFromId.bind(this);
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => this.setState({ fetchData: data }))
    }
    getAlbumFromId(id, displayHide, displayShow) {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
            .then(res => res.json()).then(json => this.setState({ fetchData: json }))
        this.setState({ hide: displayHide, show: displayShow })
        console.log('hello')
    }
    render() {
        return (
            <>
                <Table className={this.state.hide}>
                    <tr>
                        <th>User-ID</th>
                        <th>Album Title</th>
                        <th>View Album</th>
                    </tr>
                    {this.state.fetchData.map((item) =>
                        item.userId === this.state.counter &&
                        <tr key={item.id}>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>
                                <Button onClick={() => this.getAlbumFromId(item.userId, 'd-none', 'd-flex')}>View</Button>
                            </td>
                            <td className='d-none'>{this.state.counter++}</td>
                        </tr>
                    )}
                </Table>
                <AlbumComponent fetchData={this.state.fetchData} show={this.state.show} getAlbumFromId={this.getAlbumFromId} />
            </>
        );
    }
}
export default TableComponent;