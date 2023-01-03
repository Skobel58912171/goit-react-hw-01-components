import PropTypes from 'prop-types';

const FriendItem = ({ id, avatar, name }) => {
  return (
    <li key={id}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friendItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default FriendItem;
