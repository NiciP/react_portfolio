import React from "react"

const CVcard = (props) => {
    let cv = props.cv
    return (

        <div key={cv.id} className="ml-16 overflow-hidden">
                
                <div className="px-2 py-4" style={{ minHeight: '80px' }} >
                    <div className="text-white font-bold text-2xl mb-2">{cv.Position}</div>
                    <div className="text-white font-bold text-2xl mb-2">{cv.Education}</div>
                    <p className="text-grey-dark text-lg mb-2">{cv.Company}</p>
                    <p className="text-grey-dark text-lg mb-2">{cv.Institute}</p>  
                    <p className="text-xs text-white">{cv.Date}</p> 
                    <p className="text-xs text-white">{cv.Dates}</p> 
                </div>

                <div className="flex items-center justify-between leading-none md:p-4">
                    <button className="text-sm bg-green-darker hover:bg-blue-dark text-white text-xs py-1 px-4 rounded-full">
                        Details
                    </button>
                </div>
        </div>
    )
}

export default CVcard