import React from 'react';
import { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {

  const [inputValue, setInputValue] = useState('');
  const [methodValue, setMethodValue] = useState('');
  const [activeMethod, setActiveMethod] = useState('');


  const handleInput = (e) => {
    let { value } = e.target;
    setInputValue(value);
  };

  const handleClick = (e) => {
    let method = e.target.id.toUpperCase();
    setMethodValue(method);

    handleActive(e.target);
  };

  function handleActive(target) {
    if (activeMethod) {
      activeMethod.classList.remove('active');
    }
    setActiveMethod(target);
    target.classList.add('active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: methodValue,
      url: inputValue,
      text: inputValue,
    };
    props.handleApiCall(formData);
  };

  useEffect(() => {
    console.log('Updated.');
  }, [inputValue]);

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label className="input">
          <span>URL: </span>
          <input id="urlInput" onChange={handleInput} name='url' type='text' />
          <button id="go" type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleClick} id="get">GET</span>
          <span onClick={handleClick} id="post">POST</span>
          <span onClick={handleClick} id="put">PUT</span>
          <span onClick={handleClick} id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
