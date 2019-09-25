import React from 'react';

const ButtonSort = (props) => {
	return(
		<tr>
		  <th scope="col">
		  	Год<button className="btn btn-sm btn-secondary ml-2" type="button" onClick={props.sortByYear}><i className="fa fa-sort-numeric-asc pr-1" aria-hidden="true"></i>Сортировать</button>
		  </th>
		  <th scope="col">Событие
		  	<button className="btn btn-sm btn-secondary ml-2" type="button" onClick={props.sortByEvent}><i className="fa fa-sort-alpha-asc pr-1" aria-hidden="true"></i>Сортировать</button>
		  </th>
		</tr>
	)
}

export default ButtonSort