import React, { useEffect, useState } from 'react';
import * as singleSpa from 'single-spa';
// @ts-ignore
import { User, getUser } from '@micro-frontends-demo/auth'

export default function Root(props) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const subscription = getUser().subscribe(user => setUser(user))

    return () => {
      subscription.unsubscribe();
    }
  }, [])

  return <section>
    <h1>Hello from React!</h1>
    <h2>I'm {props.name} application</h2>
    <p><a href="#" onClick={evt => {
      evt.preventDefault();
      singleSpa.navigateToUrl('/')
    }}>Click here to go back to Angular.</a></p>
    {!user ? <p>Loading</p> : JSON.stringify(user)}
  </section>;
}
