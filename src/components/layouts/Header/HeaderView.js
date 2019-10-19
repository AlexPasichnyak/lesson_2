import React from 'react';
import BtnTogglerTheme from '../../elements/BtnTogglerTheme/BtnTogglerTheme';

const HeaderView = () => {
  const titleSite = 'Основы React';

  return (
    <>
      <section className="block-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <h1>
                <a className="nav-link" href="./">
                  {titleSite}
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <header className="b-b">
        <section className="block-nav">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                          Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/content">
                          Content
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/tables">
                          Tables
                    </a>
                  </li>
                </ul>
              </div>
              <BtnTogglerTheme />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default HeaderView;
