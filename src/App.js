import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import Employee from './containers/Employee';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={Employee} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
