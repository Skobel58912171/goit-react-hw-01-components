import PropTypes from 'prop-types';

const Stat = ({ id, label, percentage }) => (
  <li key={id}>
    <span>{label}</span>
    <span>{percentage}</span>
  </li>
);

Stat.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Stat;
