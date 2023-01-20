import s from './NotFound.module.css';

import React from 'react';

function NotFound() {
  return (
    <div className={s.background}>
      <h4 className={s.message} >Page not found</h4>
    </div>
  );
}

export default NotFound;
