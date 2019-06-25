import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import { Employees } from './modules';

import { apollo } from './services';

const App = () => (
  <ApolloProvider client={apollo.client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Employees} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="*" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
