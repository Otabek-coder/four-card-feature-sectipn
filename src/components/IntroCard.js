import React from "react";
import styled from "styled-components";
const IntroItem = styled.div`
  text-align: center;
  padding: 0em .7em;

`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 2.2rem;
  color: hsl(234, 12%, 34%);
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 1.8em;
    margin-top: 2em;
  }
`;
const Subtitle = styled.h1`
  font-weight: 600;
  font-size: 2.2rem;
  margin: 0;
  color: hsl(234, 12%, 34%);

  @media (max-width: 1000px) {
    font-size: 1.8em;
  }
`;
const Text = styled.p`
  color: hsl(229, 6%, 66%);
  font-weight: 400;
  margin: 0.7em 0em 2em 0em;
`;

export default function IntroCard() {
  return (
    <IntroItem>
      <Title>Reliable, efficient delivery</Title>
      <Subtitle>Powered by Technology</Subtitle>
      <Text>
        Our Artificial Intelligence powered tools use millions of project data
        <br />
        points to ensure that your project is successful
      </Text>
    </IntroItem>
  );
}
