import React, { useState } from 'react';
import style from './main.module.css';

function Main() {
  const [data, setData] = useState("");

  const converToUppercase = () => {
    setData(data.toUpperCase());
  };

  const converToLowercase = () => {
    setData(data.toLowerCase());
  };

  const trimS = () => {
    let temp = data.trim();
    let newArray = temp.split(" ");
    let considered = [];
    for (let item of newArray) {
      if (item.length > 0) {
        considered.push(item);
      }
    }
    setData(considered.join(' '));
  };

  return (
    <div className={style.mainSection}>
      <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
      <h2>Enter Your Text Here:</h2>
      <textarea 
        cols="100" 
        value={data} 
        rows="10" 
        onChange={(e) => setData(e.currentTarget.value)} 
      />
      <div className={style.buttonGroup}>
        <button onClick={converToUppercase}>Convert To Upper case</button>
        <button onClick={converToLowercase}>Convert To Lower case</button>
        <button onClick={() => setData("")}>Clear Text</button>
        <button onClick={() => navigator.clipboard.writeText(data)}>Copy To Clipboard</button>
        <button onClick={trimS}>Remove Extra Spaces</button>
      </div>
      <hr />

      <p>Number of words: {data.trim().split(/\s+/).length}</p>
      <p>Number of characters: {data.length}</p>
      <p>Avg time to read in seconds: {(data.trim().split(/\s+/).length) / 3}</p>
      <h1 style={{textAlign:'center'}}> Preview</h1>
      <textarea 
        cols="100" 
        value={data} 
        rows="10" 
        readOnly
      />
    </div>
  );
}

export default Main;
