import React, { Component }  from 'react';

export default (data) => {

  const buildObjects = () => {
    let i = data.quantity;
    let objects = [];
    while( i > 0 ) {
      objects.push(<div className="block" key={i}></div>);
      i--;
    }
    return objects;
  };

  return(
    <div className="display">
      {buildObjects()}
    </div>
  );
};
