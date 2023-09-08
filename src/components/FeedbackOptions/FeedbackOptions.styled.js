import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;
