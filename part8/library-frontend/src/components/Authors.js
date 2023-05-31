import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ALL_AUTORS, SET_BIRTH_YEAR } from '../queries';

function Authors(props) {
  const result = useQuery(ALL_AUTORS);
  if (result.loading) {
    return <div>loading...</div>;
  }

  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map(a => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birth year</h3>
      <BirthYearForm />
    </div>
  );
}

function BirthYearForm() {
  const [name, setName] = useState('');
  const [born, setBorn] = useState('');

  const [setBirthYear] = useMutation(SET_BIRTH_YEAR, {
    refetchQueries: [{ query: ALL_AUTORS }],
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          name{' '}
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born{' '}
          <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  );

  function submit(event) {
    event.preventDefault();

    setBirthYear({ variables: { name, born: +born } });

    setName('');
    setBorn('');
  }
}

export default Authors;
