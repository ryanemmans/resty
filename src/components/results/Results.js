import { useEffect } from 'react';
import ReactJson from 'react-json-view';
import './results.scss';


function Results(props) {

  useEffect(() => {
    console.log('Change in parent.');
  }, [props.data]);

  useEffect(() => {
    return () => console.log('Results going away');
  });

  return (
    <section id="results">
      <pre data-testid="data">
        {props.data
          ? <ReactJson src={props.data} theme="rjv-default" />
          : null
        }
      </pre>
    </section>
  );
}

export default Results;
