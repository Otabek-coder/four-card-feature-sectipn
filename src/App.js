import React from "react";
import styled from "styled-components";
import IntroCard from "./components/IntroCard";
// import cardData from "./data/card.json";
import Card from "./components/Card";

const MainWrapper = styled.div`
  text-align: center;
  max-width: 1440px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function App() {
  // const card = cardData.map((each) => {
  //   return(
  //   <Card
  //     key={each.id}
  //     borderTopColor={each.borderTop}
  //     title={each.title}
  //     text={each.text}
  //     image={each.image}
  //   />);
  // });

  return (
    <MainWrapper>
      <IntroCard />
      <Wrapper>
        <Card
          borderTopColor="hsl(180, 62%, 55%)"
          title="  Supervisor"
          text="Monitors activity to identify project roadblocks"
          image="/images/icon-supervisor.svg"
        />
        {/* {card} */}
        <CardWrapper>
          <Card
            borderTopColor="hsl(0, 78%, 62%)"
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            image="/images/icon-team-builder.svg"
          />
          <Card
            borderTopColor="hsl(34, 97%, 64%)"
            title=" Karma"
            text="  Regularly evaluates our talent to ensure quality"
            image="/images/icon-karma.svg"
          />
        </CardWrapper>
        <Card
          borderTopColor="hsl(212, 86%, 64%)"
          title="  Calculator"
          text="Uses data from past projects to provide better delivery estimates"
          image="/images/icon-calculator.svg"
        />
      </Wrapper>
    </MainWrapper>
  );
}

export default App;
