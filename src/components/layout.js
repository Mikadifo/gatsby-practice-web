import { Link, useStaticQuery, graphql } from "gatsby";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import * as React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="text-center px-32 py-2 dark:bg-gray-700">
      <header className="text-2xl font-bold animate-pulse dark:text-white">
        {data.site.siteMetadata.title}
      </header>
      <nav className="bg-violet-600 mt-3 mb-12 rounded drop-shadow-lg">
        <ul className="flex space-x-5 justify-center py-2">
          <li className="text-slate-50 text-lg hover:text-slate-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-slate-50 text-lg hover:text-slate-300">
            <Link to="/about">About me</Link>
          </li>
          <li className="text-slate-50 text-lg hover:text-slate-300">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="text-slate-50 text-lg flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hover:text-slate-300"
            >
              {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl my-3 dark:text-white">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
