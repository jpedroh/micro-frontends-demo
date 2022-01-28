import { registerApplication, start } from "single-spa";
// @ts-ignore
import { getUser } from "@micro-frontends-demo/auth"

registerApplication(
  'main',
  () => System.import('@micro-frontends-demo/main'),
  (location) => !location.pathname.includes('react'),
  () => { return { user: getUser() } },
);

registerApplication(
  'react',
  () => System.import('@micro-frontends-demo/react'),
  (location) => location.pathname.includes('react')
);

start();
