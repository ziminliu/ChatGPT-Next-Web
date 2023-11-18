import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";
import { getUser } from './api/logto/user/get-user';
import { redirect } from 'next/navigation';

const serverConfig = getServerSideConfig();

export default async function App() {
  const user = await getUser();
  if(!user.isAuthenticated){
    console.log("未登录")
    redirect('/api/logto/sign-in')
  }
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
