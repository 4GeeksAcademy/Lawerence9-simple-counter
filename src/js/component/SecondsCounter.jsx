import React from 'react';

export const SecondsCounter = (props) => {
  const formattedSeconds = props.seconds.toString().padStart(6, "0");
  return (
    <div className="row d-flex justify-content-center mt-1">
      <div className="col-11 d-flex bg-dark justify-content-around">
        <h1 className="text-light">Seconds: {formattedSeconds}</h1>
      </div>
    </div>
  );
};

