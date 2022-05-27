import React from 'react'; // Esta línea es opcional
import './comments.css';

function Comment(props) {
  return (
    <div className="card mb-3">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid comment-img" src={ require(`../../img/${ props.img }`) } alt={ props.name } />
          </div>
          <div className="col-md-7 text-content">
            <p className="comment-user-name"> { props.name } </p>
            <p className="comment-position"> { props.position } in <strong> { props.company } </strong> </p>
            <p className="comment"> "{ props.comment }" </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
