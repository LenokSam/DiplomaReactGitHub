import React, { useMemo } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createApplicationStore } from './redux/index';
import HomePage from './pages/homepage';
import RepositoryPage from './pages/repositorypage';

function App() {
  const store = useMemo(() => createApplicationStore(), []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/repository/:ownerName/:repositoryName" component={RepositoryPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
