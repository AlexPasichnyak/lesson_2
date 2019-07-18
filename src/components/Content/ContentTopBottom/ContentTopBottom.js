import React from 'react';

import dom1 from './../../../images/DOM.png'


const ContentTopBottom = () => {

  return(
    <section className="b-b pt-4 pb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <h2 id="html2">
              <i className="fa fa-sitemap p-r" aria-hidden="true"></i>Структура html страницы
            </h2>
            <img src={dom1} className="img-fluid" alt="DOM" />
          </div>
          <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
            <p className="lead">Каждый HTML-документ состоит из дерева HTML-элементов и текста. Элементы, находящиеся внутри тега <kbd>&lt;html&gt;</kbd>, образуют дерево документа, так называемую объектную модель документа, DOM (document object model). При этом элемент <kbd>&lt;html&gt;</kbd> является корневым элементом.
            </p>
            <p className="lead">
              Чтобы разобраться во взаимодействии элементов веб-страницы, необходимо рассмотреть так называемые <strong>«родственные отношения»</strong> между элементами. Отношения между множественными вложенными элементами подразделяются на родительские, дочерние и сестринские.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentTopBottom