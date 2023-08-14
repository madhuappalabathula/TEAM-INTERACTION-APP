import React from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>
      <h1>hello team interaction authenticator</h1>

      <Header/>
      <div className="app_body">

      <Sidebar/>

      <Routes>
        <Route path="/room/roomID">
          
        </Route>        
      </Routes>
      <Chat/>
  
      
      {/*React-Router->Chat screeen*/}
    </div>
    </Router>
    </div>
  );
}

export default App;
