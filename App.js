import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ProductList} />
          {/* Add other routes for authentication, product details, cart, etc. */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;