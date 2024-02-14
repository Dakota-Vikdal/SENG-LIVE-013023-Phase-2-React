import ProjectCard from './ProjectCard'
import projects from '../projects'

function ProjectList() {
    
    // id: 1,
    // name: "Great Outdoors Guide",
    // about: "Plan your next adventure to in the U.S. National Parks!",
    // phase: 4,
    // link: "https://great-outdoors-guide.netlify.app",
    // image: "https://i.imgur.com/8GnP2Uw.png",

    const project = projects.map((projectObj) => {
        return <ProjectCard 
                key={projectObj.id}
                {...projectObj}
            />
    })
    return (
        <section>
            <h1>All Projects</h1>
            <div>
                <button>All</button>
                <button>Phase 1</button>
                <button>Phase 2</button>
                <button>Phase 3</button>
                <button>Phase 4</button>
                <button>Phase 5</button>
            </div>
            <ul className='cards'>
                {project}
            </ul>
        </section>
    )
}


export default ProjectList