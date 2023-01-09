import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendCards, Card } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendCards>
      {friends.map(friend => (
        <Card key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Card>
      ))}
    </FriendCards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
