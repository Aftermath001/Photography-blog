import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useRouter } from "next/router";

const Aside = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  useEffect(() => {
    // update active link state when the page is reloaded
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <aside className="asideleft">
        <ul>
          <Link href="/">
            <li
              className={activeLink === "/" ? "navactive" : ""}
              onClick={() => "/"}
            >
              <span>Dashboard</span>
            </li>
          </Link>

          <Link href="/blogs">
            <li
              className={activeLink === "/blogs" ? "navactive" : ""}
              onClick={() => "/blogs"}
            >
              <BsPostcard />
              <span>Blogs</span>
            </li>
          </Link>

          <Link href="/blog/addblogs">
            <li
              className={activeLink === "/blog/addblogs" ? "navactive" : ""}
              onClick={() => "/blog/addblogs"}
            >
              <MdOutlineAddPhotoAlternate />
              <span>AddBlogs</span>
            </li>
          </Link>

          <Link href="/draft">
            <li
              className={activeLink === "/draft" ? "navactive" : ""}
              onClick={() => "/draft"}
            >
              <MdOutlinePending />
              <span>Draft</span>
            </li>
          </Link>

          <Link href="/pending">
            <li
              className={activeLink === "/pending" ? "navactive" : ""}
              onClick={() => "/pending"}
            >
              <MdOutlinePending />
              <span>Pending</span>
            </li>
          </Link>

          <Link href="/settings">
            <li
              className={activeLink === "/settings" ? "navactive" : ""}
              onClick={() => "/settings"}
            >
              <IoIosSettings />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
