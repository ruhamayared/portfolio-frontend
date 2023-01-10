import { useLoaderData } from "react-router-dom"

function Projects(props) {
  const projects = useLoaderData()

  return projects.map((project) => (
    <div className="projects">
      <h1>{project.name}</h1>
      <img
        style={{
          borderRadius: "3%",
          border: "2px solid",
          boxShadow: "5px 10px 8px #888888",
        }}
        className="projectImg"
        src={project.image}
        alt={project.name}
      />{" "}
      <br />
      <h3 className="description">{project.description}</h3>
      <a href={project.git}>
        <button>Github</button>
      </a>
      <a href={project.live}>
        <button>Live Site</button>
      </a>
    </div>
  ))
}

export default Projects
