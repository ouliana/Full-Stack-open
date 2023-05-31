import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Authors from './components/Authors';
import Books from './components/Books';
import NewBook from './components/NewBook';
import Main from './components/Main';

const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link
          style={padding}
          to='/'
        >
          Home
        </Link>
        <Link
          style={padding}
          to='/authors'
        >
          authors
        </Link>
        <Link
          style={padding}
          to='/books'
        >
          books
        </Link>
        <Link
          style={padding}
          to='/add'
        >
          add book
        </Link>
      </div>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/authors'
          element={<Authors />}
        />
        <Route
          path='/books'
          element={<Books />}
        />
        <Route
          path='/add'
          element={<NewBook />}
        />
      </Routes>
    </Router>
  );
};

export default App;
