import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

class AlbumComponent extends React.Component {
    render() {
        console.log(this.props.getAlbumFromId)
        return (
            <div className={'flex-row flex-wrap justify-content-center ' + this.props.show} >
                {this.props.fetchData.map(item =>
                    <Card key={item.id} className='m-2' style={{ width: '200px' }}>
                        <CardImg top src={item.thumbnailUrl} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <div className='dropdown-divider'></div>
                            <CardText>{item.title}</CardText>
                        </CardBody>
                    </Card>
                )}
                <Button className='fixed-bottom m-4 btn-lg rounded-circle font-weight-bold' variant="dark">&#60;</Button>
            </div>
        )
    }
}
export default AlbumComponent;
// () => this.props.getAlbumFromId('', 'd-flex', 'd-none')