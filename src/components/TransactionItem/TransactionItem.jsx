import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
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
