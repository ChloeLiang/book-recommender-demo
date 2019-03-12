import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Home from '../../components/Home';
import Rated from '../../components/Rated';
import Recommend from '../../components/Recommend';
import { BooksContext } from '../../context';

export default function App() {
  const [numOfBooksLoaded, setNumOfBooksLoaded] = useState(20);
  const [ratedBooks, setRatedBooks] = useState({
    isbn: [
      '0140386645',
      '0142000663',
      '0345337662',
      '0439064864',
      '0439136350',
      '0439139597',
      '043935806X',
      '051513628X',
      '0553573136',
      '0590353403',
      '0765342987',
      '0812575717',
    ],
    rating: [8, 10, 5, 9, 9, 9, 9, 6, 8, 9, 10, 10],
  });

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
