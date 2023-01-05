import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import {
  TransactionTable,
  HeadTable,
  CellTable,
  BodyTable,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <HeadTable>
        <tr>
          <CellTable>TYPE</CellTable>
          <CellTable>AMOUNT</CellTable>
          <CellTable>CURRENCY</CellTable>
        </tr>
      </HeadTable>
      <BodyTable>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </BodyTable>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
