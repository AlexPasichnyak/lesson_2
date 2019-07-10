import React from 'react';


const ContentTop = () => {
	return(
		<section className="b-b pt-4 pb-4" id="html">
		    <div className="container">
		      <div className="row align-items-center">
		        <div className="col-12 col-md-6 col-lg-5">
		        	<h2 id="html1"><i className="fa fa-tags p-r" aria-hidden="true"></i>Теги</h2>
		        	<p className="lead">HTML-теги — основа языка HTML. Теги используются для разграничения начала и конца элементов в разметке. Каждый HTML-документ состоит из дерева HTML-элементов и текста. Каждый HTML-элемент обозначается начальным (открывающим) и конечным (закрывающим) тегом. Открывающий и закрывающий теги содержат имя тега.</p>
		        </div>
		        <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
		          <h3>Все HTML-элементы делятся на пять типов:</h3>
		          <ol className="col-gr">
		            <li>пустые элементы — <kbd>&lt;area&gt;</kbd>, <kbd>&lt;base&gt;</kbd>, <kbd>&lt;br&gt;</kbd>, <kbd>&lt;col&gt;</kbd>, <kbd>&lt;embed&gt;</kbd>, <kbd>&lt;hr&gt;</kbd>, <kbd>&lt;img&gt;</kbd>, <kbd>&lt;input&gt;</kbd> и т.д.;</li>
		            <li>элементы, выводящие неформатированный текст - <kbd>&lt;textarea&gt;</kbd>, <kbd>&lt;title&gt;</kbd>;</li>
		            <li>элементы с неформатированным текстом - <kbd>&lt;script&gt;</kbd>, <kbd>&lt;style&gt;</kbd>;</li>
		            <li>элементы из другого пространства имён - MathML и SVG;</li>
		            <li>обычные элементы - все остальные элементы.</li>
		          </ol>    
		        </div>
		      </div>
		    </div>
		</section>
	)
}

export default ContentTop;