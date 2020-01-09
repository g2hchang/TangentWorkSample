import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css'; // Note this

//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './components/home/Home';
import MultiTest from './components/multiformat/MultiTest';
import StandardsPage from './components/standards/StandardsPage';
import Blog from './components/blog/Blog';

import { HashRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/home/Header';
import Footer from './components/home/Footer';

import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';

class WebApp extends React.Component{
  
    render(){
      return(
        <HashRouter>
          <div className="beam-app">
          
              <Header/>
              <Route exact path="/" component={Home} />
              <Route path="/multi"  component={MultiTest} />
              <Route path="/standards"  component={StandardsPage} />
             {/* <Route path="/blog"  component={Blog} />*/}
              <Footer/>
          </div>
         </HashRouter>
         
      )
    }
}

ReactDOM.render(<WebApp />, document.getElementById('root'));
  