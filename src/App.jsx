import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { FetchApi } from "./FetchApi";
import { Inicio } from "./Inicio";
import { NavBar } from "./NavBar";
import { UseState } from "./UseState";

const Apresentation = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    animation: logoRotate 10s linear infinite;
  }
`

const App = () => {

  return (
    <div className="App">
      <Apresentation>
        <Link to='/'>
          <h1>HelloReact</h1>
        </Link>
        <img className="logoReact" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Logo React" />
      </Apresentation>

      <NavBar />

      <hr />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="usestate" element={<UseState />} />
        <Route path="fetchapi" element={<FetchApi />} />
      </Routes>
    </div>
  )
}

export default App
