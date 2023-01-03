import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendItem key={friend.id} avatar={friend.avatar} name={friend.name} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()),
};

export default FriendList;
