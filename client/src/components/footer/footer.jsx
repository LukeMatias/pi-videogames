import React from "react";
import styled from "styled-components";

export default function Footer() {
  const img = {
    width: "20px",
    height: "20px",
  };

  return (
    <FooterDiv>
      <a href="https://github.com/LukeMatias" target="_blank" rel="noreferrer">
        <img src="/images/github.png" style={img} alt="github profile" />
      </a>
      <a
        href="https://linkedin.com/in/lucasmatiasba"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/linkedin.png" style={img} alt="linkedin profile" />
      </a>
      <div>
       <p><i>by Lucas Matías</i></p>
      </div>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  margin-top: auto;
  border-top: 1px solid blue;
  height: 2em;

  a {
    margin-right: 0.5em;
  }

  div{
    margin-left:auto;
  }
`;
