//npm run build to deploy anywhere

import React from 'react';
import axios from 'axios';
import './design/app.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = async (requestParams) => {
    let API_URL = requestParams.url;
    const response = await axios.get(API_URL);
    const data = {
      Headers: response.headers,
      count: response.data.count,
      Response: response.data.results
    };
    this.setState({ data, requestParams });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handleApiCall={this.callApi} />
        <section id="request">
          <div>Request Method: {this.state.requestParams.method}</div>
          <div>URL: {this.state.requestParams.url}</div>
        </section>
        <Results data={this.state.data} />
        <div id="clear"></div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
