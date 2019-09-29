import React from 'react';
import { func } from 'prop-types';

const Form = ({ onAddEvent, onDelete }) => {
  return (
    <form className="input-group-prepend" onSubmit={onAddEvent}>
      <button className="btn btn-success" type="submit">
        <i className="fa fa-plus-square pr-1" aria-hidden="true" />
Добавить новое событие
      </button>
      <input type="text" name="year" className="form-control" placeholder="Год" aria-label="" required />
      <input type="text" name="eventOfLife" className="form-control mr-5" placeholder="Событие" required />								
      <button type="button" className="btn btn-danger ml-5" onClick={onDelete}>
        <i className="fa fa-trash pr-1" aria-hidden="true" />
Удалить Событие
      </button>
    </form>
  );
};

Form.propTypes = {
  onAddEvent: func.isRequired,
  onDelete: func.isRequired
};

export default Form;
