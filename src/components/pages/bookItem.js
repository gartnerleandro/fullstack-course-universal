import React from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';

class BookItem extends React.Component {
  render() {
    return(
      <Well>
        <Row>
          <Col>
            <h6>{this.props.title}</h6>
            <h6>{this.props.description}</h6>
            <h6>usd. {this.props.price}</h6>
            <Button bsStyle='primary'>Buy now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default BookItem;