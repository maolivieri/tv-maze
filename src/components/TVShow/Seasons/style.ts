import styled from "styled-components";

interface SeasonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Season = styled.div<SeasonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  background: #fafe;
  padding: 0.4rem 0.7rem;
  border-radius: 20px;
  font-weight: 700;
`;
