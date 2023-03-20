import { useEffect, useState } from 'react';
import {
  Wrapper,
  Logo,
  Picture,
  Before,
  Ellipse,
  User,
  Img,
  Container,
  Tweet,
  Follower,
  Button,
} from './UserCard.styled';

import logo from '../../images/logo.png';
import elipse from '../../images/Ellipse.png';

export const Card = ({ user }) => {
  const storage = JSON.parse(localStorage.getItem(user.id));

  const [isFollowing, setIsFollowing] = useState(
    storage ? storage.isFollowing : false
  );
  const [followers, setFollowers] = useState(
    storage ? storage.followers : user.followers
  );

  const handleClick = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowers(followers + 1);
    } else {
      setIsFollowing(false);
      setFollowers(followers - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem(user.id, JSON.stringify({ isFollowing, followers }));
  }, [isFollowing, followers, user.id]);

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <Picture />
      <Before>
        <Ellipse src={elipse} alt="Ellipse" />
        <User>
          <Img src={user.avatar} />
        </User>
      </Before>

      <Container>
        <Tweet> {user.tweets} Tweets</Tweet>

        <Follower>{followers.toLocaleString('en-US')} Followers</Follower>

        <Button
          onClick={handleClick}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Container>
    </Wrapper>
  );
};
