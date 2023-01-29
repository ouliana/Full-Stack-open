import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = () => good + neutral + bad;

  if (all() === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  const average = () => (good - bad) / all();
  const positive = () => `${(good / all()) * 100}%`;

  return (
    <>
      <h2>statistics</h2>
      <StatisticLine
        text='good'
        value={good}
      />
      <StatisticLine
        text='neutral'
        value={neutral}
      />
      <StatisticLine
        text='bad'
        value={bad}
      />
      <StatisticLine
        text='all'
        value={all()}
      />
      <StatisticLine
        text='average'
        value={average()}
      />
      <StatisticLine
        text='positive'
        value={positive()}
      />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text='bad'
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
