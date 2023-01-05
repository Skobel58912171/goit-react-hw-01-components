import styled from 'styled-components';

export const TransactionTable = styled.table`
  padding-right: 30px;
  padding-bottom: 30px;
`;
export const HeadTable = styled.thead`
  background-color: #00bfff;
  font-size: 18px;
  color: #fff;
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CellTable = styled.th`
  padding: 20px 150px;
  width: 200px;
  :first-child {
    border-top-left-radius: 6px;
  }
  :last-child {
    border-top-right-radius: 6px;
  }
`;
export const BodyTable = styled.tbody`
  color: #606060;
  font-size: 18px;
  text-align: center;
`;
