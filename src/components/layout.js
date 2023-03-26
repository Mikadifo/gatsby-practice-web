import { Link, useStaticQuery, graphql } from "gatsby";
import * as React from "react";

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

  return (
    <div className="text-center mx-32 my-2">
      <header className="text-2xl font-bold animate-pulse">
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
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl my-3">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
