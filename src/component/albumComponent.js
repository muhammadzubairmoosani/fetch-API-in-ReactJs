import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class AlbumComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentWillMount(id) {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + this.props.id)
            .then(res => res.json()).then(json => this.setState({ data: json }))
    }

    render() {
        console.log(this.props.display)
        return (
            <div className='d-flex flex-row flex-wrap justify-content-center ' >
                {this.state.data.map(item =>
                    <Card key={item.id} className='m-2' style={{ width: '200px' }}>
                        <CardImg top src={item.thumbnailUrl} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <div className='dropdown-divider'></div>
                            <CardText>{item.title}</CardText>
                        </CardBody>
                    </Card>
                )}
                <Link to='/'>
                    <Button
                        className='fixed-bottom m-4 btn-lg rounded-circle font-weight-bold '
                        variant="dark">
                        &#60;
                    </Button>
                </Link>
            </div>
        )
    }
}
export default AlbumComponent;