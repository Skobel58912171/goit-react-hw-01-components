import PropTypes from 'prop-types';
import Stat from '../Stat/Stat';

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <Stat
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;
