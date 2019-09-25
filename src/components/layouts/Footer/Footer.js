import React, {Component} from 'react';
import FooterView from './FooterView'
import '../../../scss/layouts/Footer.scss'


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
		return (

			<FooterView addresspost={this.state.address.postcode} region={this.state.address.region} tel={this.state.address.tel} country={this.state.address.country} email={this.state.address.email} nick={this.state.nick} author={this.state.author} />
		)
	}
	
}

export default Footer;