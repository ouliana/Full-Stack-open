import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import courseParts from '../src/data/courses'

const App = () => {
  const courseName = 'Half Stack application development';
  return (
    <div>
     <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} /> 
      </div>
  );
}

export default App;
