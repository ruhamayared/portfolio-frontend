import { Link } from "react-router-dom"

function Header(props) {
  //Inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "3px solid black",
    padding: "8px",
    width: "95%",
    margin: "auto",
    marginTop: "10px",
    fontSize: "1.5em",
  }

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
