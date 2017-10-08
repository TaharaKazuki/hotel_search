import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr><th>ホテル名</th></tr>
      {hotels.map(hotel => (<HotelRow hotel={hotel} key={hotel.id} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  address: [],
};

export default HotelsTable;