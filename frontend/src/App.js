// import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
    <Route path="/" component={HomeScreen} exact/>
    <Route path="/product/:id" component={ProductScreen} exact/>
    </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
