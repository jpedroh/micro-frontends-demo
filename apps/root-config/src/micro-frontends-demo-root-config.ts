import { registerApplication, start } from "single-spa";
// @ts-ignore
import { getUser } from "@micro-frontends-demo/auth"

registerApplication(
  'main',
  (window as any).angular_main.default,
  (location) => !location.pathname.includes('react'),
  () => { return { user: getUser() } },
);

registerApplication(
  'react',
  () => System.import('@micro-frontends-demo/react'),
  (location) => location.pathname.includes('react')
);

start();
