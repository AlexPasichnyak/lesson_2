import React from 'react';
import PropTypes from 'prop-types';
import withFilterProps from '../../../../hoc/withFilterProps';

const Frameworks = ({ arrLists }) => (
  <section className="b-b pt-4 pb-4" id="css0">
    <div className="container">
      <div className="row justify-content-center">
        <h2>Популярные фреймворки</h2>
        <ul>
          {arrLists.map((item) => {
            return (
              <li key={item.name}>
                <strong>{item.name}</strong>
                &nbsp;
                <em>
(
                  {item.company}
)
                </em>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

Frameworks.propTypes = {
  arrLists: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired
};

export default withFilterProps(Frameworks);
