import { User } from "@micro-frontends-demo/auth";
import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { Observable } from "rxjs";

type UserContextData = {
  user: User | undefined
}

export const UserContext = createContext<UserContextData>(undefined)

export const UserProvider: FC<{ userStream: Observable<User> }> = ({ userStream, children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const subscription = userStream.subscribe(user => setUser(user))

    return () => {
      subscription.unsubscribe();
    }
  }, [])

  return <UserContext.Provider value={{ user }}>
    {children}
  </UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("UserContext called outside of a UserProvider")
  }
  return context.user
}