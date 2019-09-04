import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class CardComponent extends React.Component {
    render() {
        return (
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {this.props.value.map(item =>
                    <Card key={item.id} className='m-2' style={{ width: '200px' }}>
                        <CardImg top src={item.thumbnailUrl} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <div className='dropdown-divider'></div>
                            <CardText>{item.title}</CardText>
                        </CardBody>
                    </Card>
                )}
            </div>
        )
    }
}
export default CardComponent