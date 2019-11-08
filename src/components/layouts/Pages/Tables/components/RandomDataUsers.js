import React from 'react';
import PropTypes from 'prop-types';

const RandomDataUsers = ({ view, dragStart, isActiveClass }) => {
  const arrData = { ...view };
  return Object.entries(arrData).map(([id, item]) => {
    return (
      <tr
        key={id}
        draggable="true"
        onDragStart={dragStart}
        id={`row-${id}`}
        onClick={isActiveClass}
      >
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.company.name}</td>
      </tr>
    );
  });
};

RandomDataUsers.propTypes = {
  view: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dragStart: PropTypes.func,
  isActiveClass: PropTypes.func
};

export default RandomDataUsers;
