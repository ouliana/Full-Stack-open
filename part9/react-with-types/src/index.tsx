import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Welcome name="Sunshine" />
  </React.StrictMode>
);

