import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNav = ({ show, setShow }) => {
  return (
    <AsideBar show={show}>
      <Menu>
        <Link to="/"  onClick={() => setShow(!show)}>
          Inicio
        </Link>

        <Link to="/videogames" onClick={() => setShow(!show)}>
          Videogames
        </Link>
        <Link to="/videogames/create" onClick={() => setShow(!show)}>
          Create Game
        </Link>
        <Link to="acerca" onClick={() => setShow(!show)}>
          Acerca
        </Link>
      </Menu>
      
      <FooterBar>Videogames-App</FooterBar>
    </AsideBar>
  );
};

const AsideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 10%);
  position: fixed;
  top: 0;
  left: 0;
  background: #165168;
  width: 40%;
  padding: 20% 10%;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 600px) {
    flex-direction: row;
    width: max-content;
    height: min-content;
    position: relative;
    padding: 0;
    background: none;
    transform: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: #fff;
    margin: 10px 0;
    /* padding: 15px 10px; */
  }

  a:hover {
    color: #191668;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    width: max-content;
    background: none;

    a {
      color: #165168;
      padding: 0 10px;
    }
    a:hover {
      color: #3772ff;
    }
    a.active {
      border-bottom: 2px solid #165168;
      padding-bottom: 3px;
      transition: 0.1s linear;
    }
  }
`;

const FooterBar = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

export default SideNav;
