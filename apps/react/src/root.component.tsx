import { User } from '@micro-frontends-demo/auth';
import React, { VFC } from 'react';
import { Observable } from 'rxjs';
import { UserProvider } from './context/UserContext';
import { HomePage } from './views/home-page';

type Props = {
  user: Observable<User>;
}

const Root: VFC<Props> = ({ user }) => {
  return <UserProvider userStream={user}>
    <HomePage />
  </UserProvider>;
}

export default Root;