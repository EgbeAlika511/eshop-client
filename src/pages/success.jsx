import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: teal;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: coral;
`;
const Successs = () => {
  return (
    <Container>
      <H1>Successfull!!!</H1>
    </Container>
  );
};

export default Successs;
