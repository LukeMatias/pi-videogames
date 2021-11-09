import styled from "styled-components";

export const ButtonLanding = styled.button`
  cursor: pointer;
  padding: 1em 2em;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: #5a6268;
    border-color: #545b62;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`;
