import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header/Header'
import Page from './page/Page'
import './App.css';

function App() {
  return (
    <>
        <Router basename={'/router-app'}>
          <Header/>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                <Route exact path={'/home'} render={() => <Page class='page page-home'/>} />
                <Route exact path={'/posts'} render={() => <Page class='page page-posts'/>} />
                <Route exact path={'/fotos'} render={() => <Page class='page page-fotos'/>} />
                <Route exact path={'/contacts'} render={() => <Page class='page page-contacts'/>} />
                <Route render={() => <Page class='page page-error'/>} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
