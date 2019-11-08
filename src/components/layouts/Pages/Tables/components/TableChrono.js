import React from 'react';
import PropTypes from 'prop-types';
import ButtonSort from '../../../../elements/ButtonSort/ButtonSort';
import BodyOfTable from './BodyOfTable';

const TableChrono = ({ toggleSortByYear, sortByEvent, view }) => {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <ButtonSort sortByYear={toggleSortByYear} sortByEvent={sortByEvent} />
      </thead>
      <BodyOfTable view={view} />
    </table>
  );
};

TableChrono.propTypes = {
  toggleSortByYear: PropTypes.func.isRequired,
  sortByEvent: PropTypes.func.isRequired,
  view: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.array]
  ).isRequired
};

export default TableChrono;
