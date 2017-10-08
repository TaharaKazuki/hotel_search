import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <th className="hotel-price-column">
          値段
        </th>
        <th onClick={() => onSort('reviewAverage')}>
          レビュー{ sortKey === 'reviewAverage' ? '▲' : ''}
        </th>
        <th>レビュー数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (<HotelRow hotel={hotel} key={hotel.id} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

HotelsTable.defaultProps = {
  address: [],
};

export default HotelsTable;