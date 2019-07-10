import React from 'react';

const ContentBottom = () => {
  return (
      <section className="b-b pt-4 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <h2 id="html4"><i className="fa fa-list p-r" aria-hidden="true"></i>Списки в HTML</h2>
              <h5>
                <a href="#html4" rel="noopener noreferrer">Пример нумерованого списка с использованием псевдо-селекторов</a>
              </h5>
              <ol className="list-counter-square">
                <li>Маркированный список (элементы списка начинаются с маркера, к  примеру, &bull; )</li>
                <li>Нумерованный список – это набор элементов, порядок которых имеет значение. Элементы нумерованного списка начинаются с выражения, включающего номер или букву.</li>
                <li>Список определений – это список терминов и связанных с ними описаний.</li>
              </ol>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <h2 id="html5"><i className="fa fa-table p-r" aria-hidden="true"></i>Таблицы в HTML</h2>
              <h5>
                <a target="_blank" href="https://getbootstrap.com/docs/4.0/content/tables/" rel="noopener noreferrer"><i className="fa fa-external-link-square p-r" aria-hidden="true"></i>(пример от фреймворка Bootstrap)</a>
              </h5>
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContentBottom