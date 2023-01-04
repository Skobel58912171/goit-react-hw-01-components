import styled from 'styled-components';

export const FriendCards = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 200px 10px 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
