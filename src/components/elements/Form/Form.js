import React from 'react';


const Form = (props) => {
	return(
		<form className="input-group-prepend" onSubmit={props.onAddEvent}>
			<button className="btn btn-success" type="submit"><i className="fa fa-plus-square pr-1" aria-hidden="true"></i>Добавить новое событие</button>
			 <input type="text" name="year" className="form-control" placeholder="Год" aria-label="" required />
			<input type="text" name="eventOfLife" className="form-control mr-5" placeholder="Событие" required />								
			<button type="button" className="btn btn-danger ml-5" onClick={props.onDelete}><i className="fa fa-trash pr-1" aria-hidden="true"></i>Удалить Событие</button>
		</form>
	)
}
export default Form