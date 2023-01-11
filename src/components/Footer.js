function Footer(props) {
  //Inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "3px solid black",
    padding: "10px",
    margin: "auto",
    fontSize: "1.5em",
    width: "100%",
    position: "sticky",
    top: "100%",
    marginTop: "20px",
    background: "#b4b59a",
  }

  return (
    <footer>
      <nav style={navStyle}>
        <div>Email: ruhamayared1@gmail.com</div>
        <div>
          <a href="https://www.linkedin.com/in/ruhama-yared/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
        <div>
          <a href="https://github.com/ruhamayared" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
