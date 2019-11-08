import React from 'react';
import PropTypes from 'prop-types';

const BodyOfTable = (props) => {
  const { view } = props;

  return (
    <tbody>
      {Object.entries(view).map(([index, chrono]) => {
        return (
          <tr key={index}>
            <td>{chrono.year}</td>
            <td>{chrono.eventOfLife}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

BodyOfTable.propTypes = {
  view: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.array]
  ).isRequired
};

export default BodyOfTable;
