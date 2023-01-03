import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
const FriendListItem = ({ avatar, name }) => {
  return (
    <>
      <span>
        <BsFillCircleFill />
      </span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friendListItem: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default FriendListItem;
