//import React, {useState} from 'react'

function KhanCard(): JSX.Element {
  return (
    <div className="khan-card-container">
      <div className="khan-title">Fill in the Blank</div>
      <div className="khan-content">n! = n * ____</div>
      <div className="khan-horizontal-line"></div>
      <div className="khan-footer">
        <span className="show-answer">Show Answer</span>
        <div className="tries-left-container">
          <div className="tries-left">Tries Left</div>
          <div className="circle-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <button>Check</button>
        </div>
      </div>
    </div>
  );
}

export default KhanCard;
