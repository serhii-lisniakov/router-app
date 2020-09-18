import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header/Header'
import Page from './page/Page'
import './App.css';
import { HomePage, PostsPage, FotosPage, ContactsPage, ErrorPage} from './page/Page'

function App() {
  return (
    <>
        <Router basename={'/router-app'}>
          <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path={'/home'} exact component={HomePage}/>
                <Route path={'/posts'} exact component={PostsPage}/>
                <Route path={'/fotos'} exact component={FotosPage}/>
                <Route path={'/contacts'} exact component={ContactsPage}/>
                <Route exact component={() => <ErrorPage/>} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
