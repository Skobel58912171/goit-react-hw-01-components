import PropTypes from 'prop-types';
import {
  CardWrapper,
  Thumb,
  Image,
  Text,
  TagContent,
  LocationContent,
  ListStats,
  ItemStats,
  LabelText,
  QuantityText,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <CardWrapper>
      <Thumb>
        <Image src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <TagContent>@{tag}</TagContent>
        <LocationContent>{location}</LocationContent>
      </Thumb>
      <ListStats>
        <ItemStats>
          <LabelText>Followers</LabelText>
          <QuantityText>{stats.followers}</QuantityText>
        </ItemStats>
        <ItemStats>
          <LabelText>Views</LabelText>
          <QuantityText>{stats.views}</QuantityText>
        </ItemStats>
        <ItemStats>
          <LabelText>Likes</LabelText>
          <QuantityText>{stats.likes}</QuantityText>
        </ItemStats>
      </ListStats>
    </CardWrapper>
  );
};
export default Profile;

Profile.propTypes = {
  profile: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
  }),
};
