import { useLoaderData } from "react-router-dom"

function About(props) {
  const about = useLoaderData()

  return (
    <div>
      <h2 className="aboutName">{about.name}</h2>
      <img
        style={{
          width: "200px",
          borderRadius: "3%",
          border: "2px solid",
          boxShadow: "5px 10px 8px #888888",
          marginLeft: "22%",
          float: "left",
        }}
        src={about.headshot}
        alt={about.name}
      />
      <h2 className="bio">{about.bio}</h2>
    </div>
  )
}

export default About
