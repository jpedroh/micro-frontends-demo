import { User } from '@micro-frontends-demo/auth';
import { VFC } from 'react';
import { Observable } from 'rxjs';
declare type Props = {
    user: Observable<User>;
};
declare const Root: VFC<Props>;
export default Root;
