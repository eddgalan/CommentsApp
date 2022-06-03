import React from 'react'; // Esta línea es opcional
import './comments.css';

class Comment extends React.Component {

  render() {
    return (
      <div className="card mb-3">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-md-5">
              <img className="img-fluid comment-img" src={ require(`../../img/${ this.props.img }`) } alt={ this.props.name } />
            </div>
            <div className="col-md-7 text-content">
              <p className="comment-user-name"> { this.props.name } </p>
              <p className="comment-position"> { this.props.position } in <strong> { this.props.company } </strong> </p>
              <p className="comment"> "{ this.props.comment }" </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
