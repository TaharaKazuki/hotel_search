import React from 'react';
import PropTypes from 'prop-types';

const HotelsClickableTh = ({ label, sortKey, isSelected, onSort }) => (
  <th
    className="hotels-clickable-th"
    onClick={() => onSort(sortKey)}
  >{label}{isSelected ? '▲':''}</th>
);

HotelsClickableTh.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSort: PropTypes.func.isRequired,
};

HotelsClickableTh.defaultProps = {
  hotels: [],
};

export default HotelsClickableTh;