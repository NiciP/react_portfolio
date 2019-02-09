import React from "react"

const CVcard = (props) => {
    let cv = props.cv
    return (

        <div key={cv.id} className="ml-16 overflow-hidden">
                <img src={cv.Position} className="block h-auto w-full" style={{ height: '350px', objectFit: 'cover' }} />
                <div className="px-2 py-4" style={{ minHeight: '80px' }} >
                    <div className="text-white font-bold text-2xl mb-2">{cv.Position}</div>
                    <p className="text-white text-base">
                    {cv.Company}</p>    
                </div>

                <div className="flex items-center justify-between leading-none md:p-4">
                    <button className="text-sm bg-green-darker hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">
                        Details
                    </button>
                </div>
           
        </div>
    )
}

export default CVcard