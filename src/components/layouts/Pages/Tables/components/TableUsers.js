import React from 'react';
import PropTypes from 'prop-types';

const TableUsers = ({ dragOver, dropHandler, view }) => {
  return (
    <table
      className="table table-striped table-dark"
      onDragOver={dragOver}
      onDrop={dropHandler}
    >
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Email</th>
          <th scope="col">Компания</th>
        </tr>
      </thead>
      <tbody id="table_users">{view}</tbody>
    </table>
  );
};

TableUsers.propTypes = {
  dragOver: PropTypes.func,
  dropHandler: PropTypes.func,
  view: PropTypes.node
};
TableUsers.defaultProps = {
  dragOver: PropTypes.func,
  dropHandler: PropTypes.func,
  view: PropTypes.array
};

export default TableUsers;
