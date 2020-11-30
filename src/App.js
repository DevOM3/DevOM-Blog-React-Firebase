import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import About from './pages/About';
import Search from './pages/Search';
import StoreApp from './pages/StoreApp';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/search/:str" component={Search} />
          <Route path="/store" component={Store} />
          <Route path="/storeApp/:id" component={StoreApp} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    </div>
  );
}

export default App;
