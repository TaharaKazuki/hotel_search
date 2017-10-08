import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td><img src={hotel.thumbUrl} alt={hotel.name} /></td>
    <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
    <td>{hotel.price ? `${hotel.price}円` : '空室無し'}</td>
    <td>{hotel.reviewAverage}</td>
    <td>{hotel.reviewCount}</td>
    <th>約{hotel.distance}m</th>
  </tr>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.number,
    reviewAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default HotelRow;