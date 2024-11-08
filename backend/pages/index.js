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
            <h2>
              Blogs <span>Dashboard</span>
            </h2>
            <h3>Admin Panel</h3>
          </div>

          <div className="breadcrumb">
            <IoHome /> <span>/</span> <span>Dashboard</span>
          </div>
        </div>
        {/* Dashboard Cards */}
        <div className="topfourcards flex flex-sb">
          <div className="four_card">
            <h2>Total Posts</h2>
            <span>10</span>
          </div>

          <div className="four_card">
            <h2>Topics</h2>
            <span>5</span>
          </div>

          <div className="four_card">
            <h2>Tags</h2>
            <span>6</span>
          </div>

          <div className="four_card">
            <h2>Drafts</h2>
            <span>10</span>
          </div>
        </div>

        {/* Year Overvieww */}
        <div className="year_overview flex flex-sb">
          <div className="leftyearoverview">
            <div className="flex flex-sb">
              <h3>Year Overview</h3>
              <ul className="creative-dots">
                <li className="big-dot"></li>
                <li className="semi-big-dot"></li>
                <li className="medium-dot"></li>
                <li className="semi-medium-dot"></li>
                <li className="semi-small-dot"></li>
                <div className="small-dot"></div>
              </ul>
              <h3 className="text-right">
                10 / 365 <br /> <span>Total Published</span>
              </h3>
            </div>
            {/* Chart Pending */}
          </div>
          <div className="right_salescont">
            <div>
              <h3>Blogs By Category</h3>
              <ul className="creative-dots">
                <li className="big-dot"></li>
                <li className="semi-big-dot"></li>
                <li className="medium-dot"></li>
                <li className="semi-medium-dot"></li>
                <li className="semi-small-dot"></li>
                <div className="small-dot"></div>
              </ul>
            </div>

            <div className="blogscategory flex flex-center">
              <table>
                <thead>
                  <tr>
                    <td>Events</td>
                    <td>Data</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Weddings</td>
                    <td>15</td>
                  </tr>

                  <tr>
                    <td>Parties</td>
                    <td>12</td>
                  </tr>

                  <tr>
                    <td>Funeral/Burial</td>
                    <td>9</td>
                  </tr>

                  <tr>
                    <td>Meetings/Conferences</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
