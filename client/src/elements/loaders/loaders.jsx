import React from "react";

import styled, { keyframes } from "styled-components";

export default function LoaderBouncer() {
  return (
    <LoaderLanding>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderLanding>
  );
}
// Here we create a component that will rotate everything we pass in over two seconds
const bouncer = keyframes`
  from { transform: translateY(0);}
  to { transform: translateY(-100px);}
`;
const LoaderLanding = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 90vh;

  div {
    width: 20px;
    height: 20px;
    background: #0077ff;
    border-radius: 50%;
    animation: ${bouncer} 0.5s ease infinite alternate;
  }
  div:nth-child(2) {
    animation-delay: 0.1s;
  }
  div:nth-child(3) {
    animation-delay: 0.2s;
  }
  div:nth-child(4) {
    animation-delay: 0.3s;
  }
`;
