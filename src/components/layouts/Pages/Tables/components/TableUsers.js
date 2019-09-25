import React from 'react';

const TableUsers = (props) => {
	return(

		<table className="table table-striped table-dark" onDragOver={props.dragOver} onDrop={props.dropHandler}>
		    <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Email</th>
                <th scope="col">Компания</th>
              </tr>
            </thead>
            <tbody id="table_users">
            	{props.view}
            </tbody>
		</table>
	)
}

export default TableUsers