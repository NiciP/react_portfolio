import React, { Component } from "react"
import axios from "axios"
import CVcard from "./CVcard"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            cvs: [],
            edu: []
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

        render() {
            const edu = this.state.edu
            let eduList 
    
            if (edu.length > 0) {
                eduList = edu.map(ed => {
                    return (
                        <div key={edu.eid} className="min-h-2000 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"><CVcard ed={ed}/></div>
                    )
                })
            }
        }


        return (
            <div>
                <h1 className="text-white font-sans ml-20 pt-6 pb-4">My Career summary...</h1>
                {cvList}
                {eduList}
            </div>
        )
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(response => {
                this.setState({
                    cvs: response.data,
                    edu: response.data
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
