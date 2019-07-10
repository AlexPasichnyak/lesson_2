import React from 'react';
import structureHTML from './../../../images/dbdi.png'

const ContentBottomTop = () => {

	return(
		<section className="b-b pt-4 pb-4">
		    <div className="container">
		      <div className="row align-items-center">
		        <div className="col-12 col-md-6 col-lg-5">
		        	<h2 id="html3">
		        		<i className="fa fa-tasks p-r" aria-hidden="true"></i>Блочные и строчные элементы
		        	</h2>
		        	<img src={structureHTML} alt="Блочные и строчные элементы" className="img-fluid"/>
		        </div>
		        <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
		        	<p className="lead">
		        	<strong>Блочный элемент</strong> представляет собой прямоугольник, который по умолчанию занимает всю доступную ширину страницы (если иное значение не указано в CSS), а длина элемента зависит от его содержимого. Такой элемент всегда начинается с новой строки, то есть, располагается под предыдущим элементом. Блочный элемент может содержать в себе другие блочные и строчные элементы.<br/>Примеры блочных элементов: <kbd>&lt;div&gt;</kbd>, <kbd>&lt;p&gt;</kbd>, <kbd>&lt;ul&gt;</kbd>, <kbd>&lt;ol&gt;</kbd>, <kbd>&lt;h1&gt;</kbd>
		        	</p>
		        </div>
		      </div>
		    </div>
		</section>
	)

}
export default ContentBottomTop