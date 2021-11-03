import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <Wrap>
      <p>Home</p>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("/images/model-s.jpg");
`;
