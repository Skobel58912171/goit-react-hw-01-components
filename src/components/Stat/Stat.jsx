import PropTypes from 'prop-types';
import { Value } from './Stat.styled';
const Stat = ({ label, percentage }) => (
  <>
    <span>{label}</span>
    <Value>{percentage}</Value>
  </>
);

Stat.propTypes = {
  stat: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Stat;
