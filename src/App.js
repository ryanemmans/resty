//npm run build to deploy anywhere

import { useState } from 'react';
import axios from 'axios';
import './design/app.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (formParams) => {
    console.log(requestParams, formParams);
    let API_URL = formParams.url;
    const response = await axios.get(API_URL);
    const data = {
      Headers: response.headers,
      count: response.data.count,
      Response: response.data.results
    };
    // this.setState({ data, requestParams });
    setData(data);
    console.log({ ...requestParams, ...formParams });
    setRequestParams({ ...requestParams, ...formParams });
  };

  return (
    <>
      <Header />
      <Form
        setRequestParams={setRequestParams}
        requestParams={requestParams}
        handleApiCall={callApi} />
      <section id="request">
        <h3>Request Method: {requestParams.method}</h3>
        <h3>URL: {requestParams.url}</h3>
      </section>
      {data ? <Results data={data} /> : <p id="loading">Loading...</p>}
      <div id="clear" />
      <Footer />
    </>
  );
}

export default App;
