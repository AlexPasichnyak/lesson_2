import React, {Fragment} from 'react';

const HeaderView = () => {
  const titleSite = 'Основы React';

    return (
      <Fragment>
        <section className="block-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-md-8 text-center">
                <h1>
                  <a className="nav-link" href="./">{titleSite}</a>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <header className="b-b">
          <section className="block-nav">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/content">Content</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/tables">Tables</a>
                    </li>
                  </ul>
                </div>  
              </div>
            </div>
          </section>
        </header>
      </Fragment>
    )
}

export default HeaderView

