import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <LoaderDiv>
      <h3>Loading ...</h3>
    </LoaderDiv>
  );
}

const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  color: #fff;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
`;
