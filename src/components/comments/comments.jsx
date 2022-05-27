import React from 'react';
import './comments.css';

function Comment() {
  return (
    <div class="card">
      <div class="card-body p-0">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid comment-img" src={ require('../../img/user-00.png') } alt='Foto User' />
          </div>
          <div className="col-md-7 text-content">
            <p class="comment-user-name"> Edson Galan </p>
            <p class="comment-position"> Fullstrack Developer </p>
            <p class="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
