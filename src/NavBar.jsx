import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    background: transparent;
  }
`

export const NavBar = () => {
    return (
        <Nav>
            <Link to="/usestate"><button>useState</button></Link>
        </Nav>
    )
}