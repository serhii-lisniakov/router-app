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
                <Route path="/" exact component={() => <Redirect to="/home"/>}/>
                <Route path={'/home'} component={() => <Page class='page page-home'/>} />
                <Route path={'/posts'} component={() => <Page class='page page-posts'/>} />
                <Route path={'/fotos'} component={() => <Page class='page page-fotos'/>} />
                <Route path={'/contacts'} component={() => <Page class='page page-contacts'/>} />
                <Route component={() => <Page class='page page-error'/>} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
