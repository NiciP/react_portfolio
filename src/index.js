import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import './css/tailwind.css';



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

const App = () => {
    return (
    <div className="page-wrapper">
        <div className="page-content">
            <Header />
            <div className="content-wrapper">
                <Hello />
            </div>
            <Footer />
        </div >
    </div >
)
    }


ReactDOM.render(<App />, document.getElementById("app"));