import * as React from "react";
import { CgProfile } from "react-icons/cg";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="flex space-x-5 text-blue-600 dark:text-blue-100 justify-center">
        <CgProfile size="24" />
        <p className="text-start">
          Hey there! I'm the creator of this site. I'm learning Gatsby and
          Tailwind css.
        </p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
