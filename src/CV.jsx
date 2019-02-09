import React, { Component } from "react"
import axios from "axios"
import CVcard from "./CVcard"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            cvitems: []
        };
    }

    render() {
        const cvitems = this.state.cvitems
        let cvItemsList 

        if (cvitems.length > 0) {
            cvItemsList = cvitems.map(cvitem => {
                return (
                    <div key={cvitem.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"><CVcard cvitem={cvitem}/></div>
                )
            })
        }


        return (
            <div>
                <h1 className="text-white font-sans ml-20 pt-6 pb-4">My Career summary...</h1>
                {cvItemsList}
            </div>
        )
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(response => {
                this.setState({
                    cvitems: response.data
                })
            })
    }


};

export default Cv



//const CV = () =>  {
  //  return (
    //    <div>
    //        <h1 className="content-text">My CV</h1>
    //    </div>
   /// )
//}
