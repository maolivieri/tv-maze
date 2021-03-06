import { FC } from "react";
import styled from "styled-components";

interface ShowTypeProps {
  value: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  margin-right: 0.2rem;
`;
const Description = styled.p`
  font-size: 0.8rem;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

const ShowType: FC<ShowTypeProps> = ({ value }) => {
  return (
    <Container>
      <Title>Show Type:</Title>
      <Description>{value}</Description>
    </Container>
  );
};

export default ShowType;
