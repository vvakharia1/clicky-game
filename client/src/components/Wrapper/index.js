import React from 'react';
import "./style.css";

function Wrapper(props) {
  return (
    <div className="img-wrap">
      {props.children}
    </div>
  );
}

export default Wrapper