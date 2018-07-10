import React from 'react';

import orderRequests from '../../firebaseRequests/orders';
import authRequests from '../../firebaseRequests/auth';

import './OrderSpa.css';

class OrderSpa extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount () {
    orderRequests
      .getRequest(authRequests.getUid())
      .then((orders) => {
        this.setState({orders});
      })
      .catch((err) => {
        console.error('error with order get request', err);
      });
  }

  render () {
    const orderComponents = this.state.orders.map((order) => {
      return (
        <button>{order.id}</button>
      );
    });

    return (
      <div className="OrderSpa">
        <h2>Orders</h2>
        <button>New Order</button>
        <ul>
          {orderComponents}
        </ul>
      </div>
    );
  }
}

export default OrderSpa;
