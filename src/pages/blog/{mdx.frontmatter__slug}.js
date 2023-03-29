import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="text-start mb-5 text-md dark:text-white">
        Posted by {data.mdx.frontmatter.author} on {data.mdx.frontmatter.date}
      </p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
        className="w-full h-80 drop-shadow-xl mb-2"
      />
      <p className="text-sm mb-5 dark:text-white">
        Photo Credit:{" "}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          className="font-bold hover:underline"
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <div className="flex justify-center">
        <article className="prose prose-lg text-start dark:prose-invert">
          {children}
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
