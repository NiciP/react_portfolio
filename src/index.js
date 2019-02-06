import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import './css/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import Projects from "./Projects";
import About from "./About"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
    <div className="page-wrapper">
        <div className="page-content">
            <Header />
            <div className="content-wrapper">
                <Switch>
                    <Route exact path='/' component={Hello}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/projects' component={Projects}></Route>
                </Switch>
            </div>
            <Footer />
        </div >
    </div >
    )
}


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));

//    return (
 //       <div className="min-h-screen">
 //           <div className="flex flex-col w-full fixed pin-l pin-y">
  //              <Header />
  //              <div className="px-4 pt-4 flex-1 overflow-y-scrol">
   //                 <Hello />
  //              </div>
   //             <Footer />
  //          </div >
  //      </div >
//)
//};