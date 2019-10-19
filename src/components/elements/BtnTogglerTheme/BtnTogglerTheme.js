import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BtnTogglerTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ togglerTheme }) => (
        <div className="col-4 d-flex align-items-center justify-content-center">
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <strong>Выбор темы сайта</strong>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#white" onClick={togglerTheme}>
                Белая
              </a>
              <a className="dropdown-item bg-dark" href="#dark" onClick={togglerTheme}>
                Темная
              </a>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default BtnTogglerTheme;
