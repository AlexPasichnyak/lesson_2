import React from 'react';
import { func } from 'prop-types';

const ButtonSort = ({ sortByYear, sortByEvent }) => {
  return (
    <tr>
      <th scope="col">
        Год
        <button
          className="btn btn-sm btn-secondary ml-2"
          type="button"
          onClick={sortByYear}
        >
          <i className="fa fa-sort-numeric-asc pr-1" aria-hidden="true" />
          Сортировать
        </button>
      </th>
      <th scope="col">
        Событие
        <button
          className="btn btn-sm btn-secondary ml-2"
          type="button"
          onClick={sortByEvent}
        >
          <i className="fa fa-sort-alpha-asc pr-1" aria-hidden="true" />
          Сортировать
        </button>
      </th>
    </tr>
  );
};

ButtonSort.propTypes = {
  sortByYear: func.isRequired,
  sortByEvent: func.isRequired
};

export default ButtonSort;
