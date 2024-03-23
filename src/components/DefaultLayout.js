import React from 'react';
import '../resources/default-layout.css';

const DefaultLayout = (props) => {
  return (
    <div className='layout'>
      <div className="header">
        <h1>EMARH CV</h1>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout;
