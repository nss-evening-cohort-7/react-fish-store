import React from 'react';

import './Order.css';

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fishes.find(x => x.id === key);
    const count = this.props.order[key];

    return (
      <li>
        {count} lbs {fish.name}
      </li>
    );
  }
  render () {
    const orderIds = Object.keys(this.props.order);
    return (
      <div className="Order">
        <h2>Order</h2>
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">Total:</div>
        <button className="btn btn-default">Save Order</button>
      </div>
    );
  }
}

export default Order;
