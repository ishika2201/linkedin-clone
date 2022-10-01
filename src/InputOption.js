import React from 'react';
import "./InputOption.css";


function InputOption({Icon ,title}) {
  return (
    <div className='input_option'>
        <Icon/>
        <h6>{title}</h6>
    </div>
  )
}

export default InputOption;