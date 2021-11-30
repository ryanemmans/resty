import { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {

  const [requestData, setRequestData] = useState('');
  const [requestUrl, setRequestUrl] = useState('');
  const [activeMethod, setActiveMethod] = useState('');

  const handleClick = (e) => {
    let method = e.target.id.toUpperCase();
    // let { value } = e.target.id.toUpperCase();
    setRequestData(method);
    props.setRequestParams({...props.RequestParams, method});

    handleActive(e.target);
  };

  const handleActive = (target) => {
    if (activeMethod) {
      activeMethod.classList.remove('active');
    }
    setActiveMethod(target);
    target.classList.add('active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let jsonString = e.target.json.value;
    const formData = {
      method: requestData,
      url: requestUrl,
      // body: JSON.parse(requestData),
      text: requestUrl,
    };
    props.handleApiCall(formData);
  };

  useEffect(() => {
    console.log('Updated.');
  }, [requestUrl]);

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label className="input">
          <h4>URL: </h4>
          <input id="urlInput" onChange={(e) => setRequestUrl(e.target.value)} name='url' type='text' />
          <button id="go" type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleClick} id="get" value="GET">GET</span>
          <span onClick={handleClick} id="post" value="POST">POST</span>
          <span onClick={handleClick} id="put" value="PUT">PUT</span>
          <span onClick={handleClick} id="delete" value="DELETE">DELETE</span>
        </label>
        <textarea placeholder="Enter JSON" id="textArea" name="json" onChange={(e) => setRequestData(e.target.value)} />
      </form>
    </>
  );
}

export default Form;
