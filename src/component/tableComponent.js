import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchData: [],
            counter: 1,
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json()).then(json => this.setState({ fetchData: json }))
    }

    render() {
        return (
            <Table >
                <thead>
                    <tr>
                        <th>User-ID</th>
                        <th>Album Title</th>
                        <th>View Album</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.fetchData.map((item) =>
                        item.userId === this.state.counter &&
                        <tr key={item.id}>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>
                                <Link to='/album' >
                                    <Button onClick={() => { this.props.getUserId(item.userId); }}>View</Button>
                                </Link>
                            </td>
                            <td className='d-none'>{this.state.counter++}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}
export default TableComponent;