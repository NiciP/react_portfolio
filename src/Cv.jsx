import React, { Component } from "react"
import axios from "axios"
import CVcard from "./CVcard"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            cvs: []
        };
    }

    render() {
        const cvs = this.state.cvs
        let cvList 

        if (cvs.length > 0) {
            cvList = cvs.map(cv => {
                return (
                    <div key={cvs.id} className="min-h-2000 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"><CVcard cv={cv}/></div>
                )
            })
        }
        

        return (
            <div>
                <h1 className="text-grey-darker font-sans ml-20 pt-6 pb-4">My Career summary...</h1>
                {cvList}
            </div>
        )
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(response => {
                this.setState({
                    cvs: response.data
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
