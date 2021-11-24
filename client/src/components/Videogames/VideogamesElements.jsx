import styled from "styled-components";

// export default Videogames;

export const MainApp = styled.main`
  background: url(/images/joystick.jpg) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  h1 {
    color: #ffff;
  }

  form {
    div {
      margin: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      input {
        width: 100%;
        height: 25px;
        margin-bottom: 0.5em;
      }
      button {
        cursor: pointer;
        padding: 0.5em 1em;
      }
    }
  }

  @media (min-width: 600px) {
    form {
      div {
        flex-direction: row;
        align-items: center;
        input {
          width: 75%;
          height: 25px;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const SectionFiltAndCards = styled.section`
  @media (min-width: 600px) {
    display: flex;
    flex-direction:row;
    justify-content:center;
    min-height:90vh;
    margin:2em 0 ;
  }
`;
