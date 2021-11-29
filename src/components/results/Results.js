import React from 'react';
import { useEffect } from 'react';
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
      <pre data-testid="data">{props.data ? JSON.stringify(props.data, undefined, 2) : <p>Awaiting input.</p>}</pre>
    </section>
  );
}

export default Results;
