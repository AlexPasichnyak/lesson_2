import React, {Component} from 'react';


class Footer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			address: {
				postcode: 25000,
				region: 'Kirovograd region',
				country: 'Ukraine',
				tel: '+380993700149',
				email: 'aleksa.intel@gmail.com'
			},
			author: 'Oleksandr Pasichnyak',
			nick: 'Sancho Paska'
		}
	}

	render () {

		const year = new Date().getFullYear();

		return (
			<footer>
			    <div className="container">
			      <div className="row align-items-top text-center">
			        <div className="col-12 col-sm-6 mt-4 mt-sm-0">
			        	<h3><strong>Address</strong></h3>
			        	<p><i className="fa fa-map-signs p-r" aria-hidden="true"></i>{this.state.address.postcode}, {this.state.address.region},<br/>{this.state.address.country}</p>
			        	<p>
			        		<a href="tel:+380993700149" target="_blank" rel="noopener noreferrer"><i className="p-r fa fa-phone" aria-hidden="true"></i>{this.state.address.tel}
			        		</a>
			        	</p>
			        	<p>
			        		<a href="mailto:aleksa.intel@gmail.com" rel="noopener noreferrer"><i className="fa fa-envelope-o p-r" aria-hidden="true"></i>{this.state.address.email}
			        		</a>
			        	</p>
			        </div>
			        <div className="col-12 col-md-4 mt-5 mt-md-0">
				        <h3>
				        	<a href="https://github.com/AlexPasichnyak/lesson_2" target="_blank" rel="noopener noreferrer"><strong><i className="fa fa-github fa-2x p-r" aria-hidden="true"></i>Designed by {this.state.nick}</strong></a>
				        </h3>
				        <p>
				        	<a href="https://github.com/AlexPasichnyak/lesson_2" rel="noopener noreferrer">Get and refine this template  <i className="fa fa-code-fork" aria-hidden="true"></i></a><br/>
				          We are looking for suggestions for improving design and cooperation
				      	</p>
				    </div>
			      </div>
			      <div className="row mt-5">
			        <div className="col text-center">
			        	<div className="wrapper">
			        		<div>
			        			<p>&copy; {year}, <a href="https://github.com/AlexPasichnyak/" target="_blank" rel="noopener noreferrer"> {this.state.author} <i className="fa fa-github p-r" aria-hidden="true"></i></a> All Rights Reserved</p>
			        		</div>
			        	</div>
			        </div>
			      </div>
			    </div>
			</footer>
		)
	}
	
}

export default Footer;