import { User } from "@micro-frontends-demo/auth";
import { FC } from "react";
import { Observable } from "rxjs";
export declare const UserProvider: FC<{
    userStream: Observable<User>;
}>;
export declare const useUser: () => User;
