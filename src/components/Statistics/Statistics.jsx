import PropTypes from 'prop-types';
import Stat from '../Stat/Stat';
import {
  Container,
  Caption,
  ListStatistics,
  ItemStatistics,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Caption>{title}</Caption>}
      <ListStatistics>
        {stats.map(stat => (
          <ItemStatistics key={stat.id}>
            <Stat
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          </ItemStatistics>
        ))}
      </ListStatistics>
    </Container>
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
