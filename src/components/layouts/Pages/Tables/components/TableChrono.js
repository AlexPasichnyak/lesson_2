import React from 'react';
import { node, func } from 'prop-types';
import ButtonSort from '../../../../elements/ButtonSort/ButtonSort';

const TableChrono = ({ toggleSortByYear, sortByEvent, view }) => {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <ButtonSort sortByYear={toggleSortByYear} sortByEvent={sortByEvent} />
      </thead>
      <tbody>
        {view}
      </tbody>
    </table>
  );
};

TableChrono.propTypes = {
  toggleSortByYear: func.isRequired,
  sortByEvent: func.isRequired,
  view: node.isRequired
};

export default TableChrono;
