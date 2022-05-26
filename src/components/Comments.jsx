import React from 'react';

function Comment() {
  return (
    <div className='comment-container'>
      <img className='comment-img' src={ require('../img/user-00.png') } alt='Foto User' />
      <div className='text-container'>
        <p className=''> Nombre </p>
        <p className=''> Puesto / Cargo </p>
        <p className=''> Comment </p>
      </div>
    </div>
  );
}

export default Comment;
