import users from '../../data/users';
import { Card } from 'components/UserCard/UserCard';
import { Wrapper } from './UserList.styled';

export const UserList = () => {
  return (
    <Wrapper>
      {users.map(user => {
        return <Card key={user.id} user={user} />;
      })}
    </Wrapper>
  );
};
