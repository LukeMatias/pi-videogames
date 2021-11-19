import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "../SideBar/SideBar.jsx";


const Toggle = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Burger show={show} onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <SideNav show={show} setShow={setShow} />

    </>
  );
};

const Burger = styled.button`
  width: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  z-index: 999;

  span {
    display: flex;
    height: 3px;
    background-color: ${({ show }) => (show ? "#ccc" : "#165168")};
    border-radius: 10px;
    margin-bottom: 6px;
    transform-origin: 3px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ show }) => (show ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ show }) =>
        show ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ show }) => (show ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ show }) => (show ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

export default Toggle;
