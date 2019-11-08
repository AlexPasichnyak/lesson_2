import React from 'react';
import PropTypes from 'prop-types';
import RandomDataUsers from './RandomDataUsers';

const TableUsers = ({
  dragOver, dropHandler, view, dragStart, isActiveClass 
}) => {
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
      <tbody id="table_users">
        <RandomDataUsers
          view={view}
          dragStart={dragStart}
          isActiveClass={isActiveClass} 
        />
      </tbody>
    </table>
  );
};

TableUsers.propTypes = {
  dragOver: PropTypes.func,
  dropHandler: PropTypes.func,
  view: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.array]
  ),
  dragStart: PropTypes.func,
  isActiveClass: PropTypes.func
};
TableUsers.defaultProps = {
  dragOver: PropTypes.func,
  dropHandler: PropTypes.func,
  view: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.array]
  ),
  dragStart: PropTypes.func,
  isActiveClass: PropTypes.func
};

export default TableUsers;
