import React from 'react';
import ButtonSort from '../../../../elements/ButtonSort/ButtonSort';

const TableChrono = (props) => {
	return(

		<table className="table table-striped table-dark">
		    <thead>
		    	<ButtonSort sortByYear={props.toggleSortByYear} sortByEvent={props.sortByEvent} />
	        </thead>
	        <tbody>
				{props.view}
	        </tbody>
		</table>
	)
}

export default TableChrono