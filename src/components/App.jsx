import user from 'components/Profile/user.json';
import { GlobalStyle } from './GlobalStyle';
import { ProfileCard } from './Profile/ProfileCard';

import data from 'components/Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from 'components/FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
