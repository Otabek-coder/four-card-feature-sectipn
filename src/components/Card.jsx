import React from "react";
import { CardItem, CardText, CardTitle, ImageWrapper } from "./Card.styles";

export default function Card({ title, text, image, borderTopColor }) {
  return (
    <CardItem borderTop={borderTopColor}>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
    </CardItem>
  );
}
