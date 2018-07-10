import React from 'react';

import formatPrice from '../../helpers';

import './Fish.css';

class Fish extends React.Component {
  render () {
    const { details } = this.props;
    const isAvailable = details.status  === 'available';
    const image = require(`${details.image}`);
    return (
      <li className="Fish">
        <img src={image} alt={details.name}/>
        <h3 className="name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
