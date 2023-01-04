import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Caption = styled.h2`
  font-size: 36px;
  color: #484848;
  text-align: center;
`;

export const ListStatistics = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ItemStatistics = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 153px;
  align-items: center;
  padding: 30px 0;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
  color: #fff;
  font-size: 30px;

  :last-child {
    border-bottom-right-radius: 6px;
  }
  :first-child {
    border-bottom-left-radius: 6px;
  }
`;
