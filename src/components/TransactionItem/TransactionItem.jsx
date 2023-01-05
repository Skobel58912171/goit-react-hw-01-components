import PropTypes from 'prop-types';
import { RowTable, CellTableValue } from './TransactionItem.styled';
const TransactionItem = ({ type, amount, currency }) => {
  return (
    <RowTable>
      <CellTableValue>{type}</CellTableValue>
      <CellTableValue>{amount}</CellTableValue>
      <CellTableValue>{currency}</CellTableValue>
    </RowTable>
  );
};
TransactionItem.propTypes = {
  transactionItem: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionItem;
