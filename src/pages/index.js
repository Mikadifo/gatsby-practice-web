import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="flex gap-3 justify-center">
        <StaticImage
          alt="Gatsby logo"
          src="../images/icon.png"
          className="w-20 h-20 animate-spin hover:animate-none"
        />
        <p className="text-blue-600 self-center">
          Learning Gatsby to migrate my old personal website here.
        </p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
