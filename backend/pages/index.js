import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check localStorage for login flag
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      router.push("/login"); // Redirect to login if not logged in
    }
  }, [router]);

  if (!isLoggedIn) {
    return null; // Render nothing while redirecting
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="admin dashboard by next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dashboard">
        <div className="titledashboard flex flex-sb">
          <div>
            <h2>Blogs <span>Dashboard</span></h2>
            <h3>Admin Panel</h3>
          </div>

          <div className="breadcrumb">
            <IoHome /> <span>/</span> <span>Dashboard</span>
          </div>
        </div>
      </div>
    </>
  );
}
