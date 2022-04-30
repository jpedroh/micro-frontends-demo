import { User } from "@micro-frontends-demo/auth";
import React, { FC } from "react";
import { Observable } from "rxjs";
declare type UserContextData = {
    user: User | undefined;
};
export declare const UserContext: React.Context<UserContextData>;
export declare const UserProvider: FC<{
    userStream: Observable<User>;
}>;
export declare const useUser: () => User;
export {};
