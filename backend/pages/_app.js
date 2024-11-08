import Aside from "@/components/Aside";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      {/* Provides the user's session data to all components within the application, enabling access to authentication state and user details across the app */}
      <SessionProvider session={session}>
        <Header />
        <Aside />
        <main>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}
