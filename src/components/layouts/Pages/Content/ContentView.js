import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import dom from '../../../../images/DOM.png';
import structureHTML from '../../../../images/dbdi.png';

const ContentView = () => {
  const lists = 'Списки в HTML';
  const tables = 'Таблицы в HTML';
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className={`b-b pt-4 pb-4 ${theme}`} id="html">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
              <h2 id="html1">
                <i className="fa fa-tags p-r" aria-hidden="true" />
                      Теги
              </h2>
              <p className="lead">
                      HTML-теги — основа языка HTML. Теги используются для
                      разграничения начала и конца элементов в разметке. Каждый
                      HTML-документ состоит из дерева HTML-элементов и текста. Каждый
                      HTML-элемент обозначается начальным (открывающим) и конечным
                      (закрывающим) тегом. Открывающий и закрывающий теги содержат имя
                      тега.
              </p>
            </div>
            <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
              <h3>Все HTML-элементы делятся на пять типов:</h3>
              <ol className="col-gr">
                <li>
                        пустые элементы —
                  <kbd>&lt;area&gt;</kbd>
,
                  <kbd>&lt;base&gt;</kbd>
,
                  <kbd>&lt;br&gt;</kbd>
,
                  <kbd>&lt;col&gt;</kbd>
,
                  <kbd>&lt;embed&gt;</kbd>
,
                  <kbd>&lt;hr&gt;</kbd>
,
                  <kbd>&lt;img&gt;</kbd>
,
                  <kbd>&lt;input&gt;</kbd>
                  {' '}
                          и т.д.;
                </li>
                <li>
                        элементы, выводящие неформатированный текст -
                  <kbd>&lt;textarea&gt;</kbd>
,
                  <kbd>&lt;title&gt;</kbd>
;
                </li>
                <li>
                        элементы с неформатированным текстом -
                  <kbd>&lt;script&gt;</kbd>
,
                  <kbd>&lt;style&gt;</kbd>
;
                </li>
                <li>элементы из другого пространства имён - MathML и SVG;</li>
                <li>обычные элементы - все остальные элементы.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className={`b-b pt-4 pb-4 ${theme}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
              <h2 id="html2">
                <i className="fa fa-sitemap p-r" aria-hidden="true" />
                      Структура html страницы
              </h2>
              <img src={dom} className="img-fluid" alt="DOM" />
            </div>
            <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
              <p className="lead">
                      Каждый HTML-документ состоит из дерева HTML-элементов и текста.
                      Элементы, находящиеся внутри тега
                <kbd>&lt;html&gt;</kbd>
, образуют дерево документа, так
                      называемую объектную модель документа, DOM (document object
                      model). При этом элемент
                <kbd>&lt;html&gt;</kbd>
                {' '}
                {' '}
является корневым элементом.
                {' '}
              </p>
              <p className="lead">
                      Чтобы разобраться во взаимодействии элементов веб-страницы,
                      необходимо рассмотреть так называемые
                {' '}
                <strong>«родственные отношения»</strong>
                {' '}
                {' '}
между элементами.
                      Отношения между множественными вложенными элементами
                      подразделяются на родительские, дочерние и сестринские.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`b-b pt-4 pb-4 ${theme}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
              <h2 id="html3">
                <i className="fa fa-tasks p-r" aria-hidden="true" />
                      Блочные и строчные элементы
              </h2>
              <img
                src={structureHTML}
                alt="Блочные и строчные элементы"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
              <p className="lead">
                <strong>Блочный элемент</strong>
                {' '}
                {' '}
представляет собой
                      прямоугольник, который по умолчанию занимает всю доступную
                      ширину страницы (если иное значение не указано в CSS), а длина
                      элемента зависит от его содержимого. Такой элемент всегда
                      начинается с новой строки, то есть, располагается под предыдущим
                      элементом. Блочный элемент может содержать в себе другие блочные
                      и строчные элементы.
                <br />
                      Примеры блочных элементов:
                <kbd>&lt;div&gt;</kbd>
,
                <kbd>&lt;p&gt;</kbd>
,
                <kbd>&lt;ul&gt;</kbd>
,
                <kbd>&lt;ol&gt;</kbd>
,
                <kbd>&lt;h1&gt;</kbd>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`b-b pt-4 pb-4 ${theme}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <h2 id="html4">
                <i className="fa fa-list p-r" aria-hidden="true" />
                {lists}
              </h2>
              <h5>
                <a href="\#" rel="noopener noreferrer">
                        Пример нумерованого списка с использованием псевдо-селекторов
                </a>
              </h5>
              <ol className="list-counter-square">
                <li>
                        Маркированный список (элементы списка начинаются с маркера, к
                        примеру, &bull; )
                </li>
                <li>
                        Нумерованный список – это набор элементов, порядок которых
                        имеет значение. Элементы нумерованного списка начинаются с
                        выражения, включающего номер или букву.
                </li>
                <li>
                        Список определений – это список терминов и связанных с ними
                        описаний.
                </li>
              </ol>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <h2 id="html5">
                <i className="fa fa-table p-r" aria-hidden="true" />
                {tables}
              </h2>
              <h5>
                <a
                  target="_blank"
                  href="https://getbootstrap.com/docs/4.0/content/tables/"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-external-link-square p-r"
                    aria-hidden="true"
                  />
                        (пример от фреймворка Bootstrap)
                </a>
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
    </>
  );
};

export default ContentView;
