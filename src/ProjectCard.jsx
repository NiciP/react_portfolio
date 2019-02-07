import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id} className="ml-16 overflow-hidden">
            <a href={project.link} target="_blank">
                <img src={project.image} className="block h-auto w-full" style={{ height: '350px', objectFit: 'cover' }} />
                </a>
                <div className="px-2 py-4" style={{ minHeight: '80px' }} >
                    <div className="text-white font-bold text-2xl mb-2">{project.name}</div>
                    <p className="text-white text-base">
                        {project.description}
                    </p>    
                </div>

                <div className="flex items-center justify-between leading-none md:p-4">
                    <button className="text-sm bg-green-darker hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">
                        Details
                    </button>
                </div>
           
        </div>
    )
}

export default ProjectCard
