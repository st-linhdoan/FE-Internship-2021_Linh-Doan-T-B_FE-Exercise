import React from "react";
import {Link} from 'react-router-dom';

const App = (props) => {
  return (
    <div className="container">
        {props.children}
    </div>
  );
}

export default App;
