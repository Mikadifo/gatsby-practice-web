import * as React from "react";
import { graphql, navigate } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={"Blog Posts"}>
      <div className="grid grid-flow-col gap-5">
        {data.allMdx.nodes.map((node) => (
          <article
            key={node.id}
            className="border-2 border-violet-400 rounded p-3 drop-shadow-2xl flex flex-col dark:text-white"
          >
            <h2 className="text-xl font-semibold">{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p className="text-start my-5">{node.excerpt}</p>
            <button
              className="p-2 mt-auto w-full rounded-md bg-gradient-to-r from-violet-300 to-fuchsia-300 text-sm font-semibold opacity-75 drop-shadow hover:opacity-100 text-black"
              onClick={() => navigate(`/blog/${node.frontmatter.slug}`)}
            >
              Read post
            </button>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={"Blog Posts"} />;

export default BlogPage;
