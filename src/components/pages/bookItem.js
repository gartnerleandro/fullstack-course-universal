import React from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';

class BookItem extends React.Component {
  handlerCart() {
    const book = [
      ...this.props.cart,
      {
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        price: this.props.price,
      }
    ]
    this.props.addToCart(book);
  }
  render() {
    return(
      <Well>
        <Row>
          <Col>
            <h6>{this.props.title}</h6>
            <h6>{this.props.description}</h6>
            <h6>usd. {this.props.price}</h6>
            <Button onClick={this.handlerCart.bind(this)} bsStyle='primary'>Buy now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart: addToCart
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookItem);