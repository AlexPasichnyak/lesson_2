import React from 'react';

const Title = () => {
  const titleSite = 'Основы HTML CSS'
  return (
    <section className="block-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-md-8 text-center">
            <h1>
              <a className="nav-link" href="/">{titleSite}</a>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Title

