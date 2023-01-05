import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { Avatar, Circle } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Circle isOnline={isOnline}>
        <BsFillCircleFill />
      </Circle>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friendListItem: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendListItem;
