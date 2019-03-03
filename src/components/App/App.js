import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Home from '../../components/Home';
import Rated from '../../components/Rated';
import Recommend from '../../components/Recommend';
import { BooksContext } from '../../context';

export default function App() {
  const [numOfBooksLoaded, setNumOfBooksLoaded] = useState(20);
  const [ratedBooks, setRatedBooks] = useState([
    { isbn: '0140386645', rating: 8 },
  ]);

  const booksContext = {
    numOfBooksLoaded,
    setNumOfBooksLoaded,
    ratedBooks,
    setRatedBooks,
  };

  return (
    <BooksContext.Provider value={booksContext}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/rated" component={Rated} />
            <Route path="/Recommend" component={Recommend} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </BooksContext.Provider>
  );
}
