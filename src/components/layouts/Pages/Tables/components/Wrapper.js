import React, {Fragment} from 'react';

const Wrapper = (props) => {

    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center">
            <h2>{props.title}</h2>
            {props.children}
          </div>
        </div>
        <hr/>
      </Fragment>
    )
}

export default Wrapper