import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Home from '../../components/Home';
import Rated from '../../components/Rated';
import Recommend from '../../components/Recommend';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/rated" component={Rated} />
          <Route path="/Recommend" component={Recommend} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}
