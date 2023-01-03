import PropTypes from 'prop-types';

const Stat = ({label, percentage }) => (
  <>
    <span>{label}</span>
    <span>{percentage}</span>
  </>
);

Stat.propTypes = {
  stat: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Stat;
