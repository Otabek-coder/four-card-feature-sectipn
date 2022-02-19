import styled from "styled-components";

export const CardItem = styled.div`
  border-top: 5px solid ${({ borderTop }) => borderTop || 0};

  box-shadow: rgba(50, 50, 93, 0.25) 0px 8px 18px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: #fff;
  position: relative;
  max-width: 350px;
  height: 250px;
  margin: 1em;
  padding: 2em;
  text-align: left;
  border-radius: 5px;
`;
export const CardTitle = styled.h2`
  color: hsl(234, 12%, 34%);
  margin-top: 0;
`;
export const CardText = styled.p`
  color: hsl(229, 6%, 66%);
  font-weight: 400;
  font-size: 15px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  padding: 2em;
  bottom: 0;
  right: 0;
`;
