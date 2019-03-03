import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Home from '../../components/Home';
import Rated from '../../components/Rated';
import Recommend from '../../components/Recommend';
import { allBooks } from '../../data/books';
import { BooksContext } from '../../context';

export default function App() {
  const [books, setBooks] = useState(allBooks.slice(0, 20));

  const booksContext = {
    books,
    setBooks,
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
