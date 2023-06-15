import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  text-align: center;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: coral;
`;
const Error = () => {
  return (
    <Container>
      <H1>Oops!!! Something went wrong</H1>
    </Container>
  );
};

export default Error;
