import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  border: solid 2px black;
  border-radius: 4px;
`;

export const Circle = styled.span`
  margin: 0;
  svg {
    color: ${props => {
      return props.isOnline ? 'green' : 'red';
    }};
  }
`;
