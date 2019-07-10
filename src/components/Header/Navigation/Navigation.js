import React from 'react';

const Navigation = () => {
	return (
		<header className="b-b">
			<section className="block-nav">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-12 text-center">
			        <h2>Проект создан для демонстрации уровня умения верстки</h2>
			      </div>  
			    </div>
			  </div>
			</section>
			<section>
			  <div className="container">
			    <div className="row">
			        <div className="col-12 col-lg-6 text-center">
			            <div className="details_link shad">
			              <a href="#html" className="d-bl">
			              	<i className="fa fa-html5 fs10" aria-hidden="true"></i>
			              </a>
			              <input type="checkbox" id="bottom-button"/>
			              <div className="description">
			                <div className="list-group">
			                  <a href="#html1" className="list-group-item list-group-item-action">
			                  	<i className="fa fa-tags p-r" aria-hidden="true"></i><h4>Теги</h4>
			                  </a>
			                  <a href="#html2" className="list-group-item list-group-item-action">
			                  	<i className="fa fa-sitemap p-r" aria-hidden="true"></i><h4>Структура html страницы</h4>
			                  </a>
			                  <a href="#html3" className="list-group-item list-group-item-action">
			                  	<i className="fa fa-arrows p-r" aria-hidden="true"></i><h4>Блочные и строчные элементы</h4>
			                  </a>
			                  <a href="#html4" className="list-group-item list-group-item-action">
			                  	<i className="fa fa-list p-r" aria-hidden="true"></i><h4>Списки</h4>
			                  </a>
			                  <a href="#html5" className="list-group-item list-group-item-action">
			                  	<i className="fa fa-table p-r" aria-hidden="true"></i><h4>Таблицы</h4>
			                  </a>
			                  <a href="#html5" className="list-group-item list-group-item-action">
			                  	<i className="fa fa-anchor p-r" aria-hidden="true"></i><h4>Якоря</h4>
			                  </a>
			                </div>
			              </div>
			              <label htmlFor="bottom-button"></label>
			            </div>
			        </div>
			      	<div className="col-12 col-lg-6 text-center">
			            <div className="details_link shad">
			              <a href="#css" className="d-bl">
			              	<i className="fa fa-css3 fs10" aria-hidden="true"></i>
			              </a>
			              <input type="checkbox" id="bottom-button2"/>
			              <div className="description">
				                <div className="list-group">
				                  <a href="#css0" className="list-group-item list-group-item-action">
				                  	<i className="fa fa-edit p-r" aria-hidden="true"></i><h4>Стили</h4>
				                  </a>
				                  <a href="#css1" className="list-group-item list-group-item-action">
				                  	<i className="fa fa-flask p-r" aria-hidden="true"></i><h4>Классы</h4>
				                  </a>
				                  <a href="#css2" className="list-group-item list-group-item-action">
				                  	<i className="fa fa-hashtag p-r" aria-hidden="true"></i><h4>Идентификаторы</h4>
				                  </a>
				                  <a href="#css3" className="list-group-item list-group-item-action">
				                  	<i className="fa fa-sort p-r" aria-hidden="true"></i><h4>Cелекторы</h4>
				                  </a>
				                  <a href="#css4" className="list-group-item list-group-item-action">
				                  	<i className="fa fa-filter p-r" aria-hidden="true"></i><h4>Псевдоклассы</h4>
				                  </a>
				                  <a href="#css5" className="list-group-item list-group-item-action">
				                  	<i className="fa fa-filter p-r" aria-hidden="true"></i><h4>Псевдоэлементы</h4>
				                  </a>
				                </div>
			              	</div>
			              	<label htmlFor="bottom-button2"></label>
			            </div>
			      	</div>
			    </div>
			  </div>
			</section>
		</header>
	)
}

export default Navigation