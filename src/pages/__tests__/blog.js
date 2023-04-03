import * as React from "react";
import * as Gatsby from "gatsby";
import { cleanup, render } from "@testing-library/react";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: `First Gatsby Site`,
    },
  },
};

import BlogPost from "../blog/{mdx.frontmatter__slug}";

const data = {
  mdx: {
    frontmatter: {
      title: "Test Blog",
      date: "March 15, 2023",
      author: "Mikadifo",
      hero_image_alt: "A guy using a book in a paper rain",
      hero_image_credit_link: "https://unsplash.com/photos/O33IVNPb0RI",
      hero_image_credit_text: "Dmitry Ratushny",
      hero_image: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            backgroundColor: "#181818",
            images: {
              fallback: {
                src: "/static/069b2340b227c27a4a4d9b739518843c/45171/paper_rain.jpg",
                srcSet:
                  "/static/069b2340b227c27a4a4d9b739518843c/7acdf/paper_rain.jpg 480w,\n/static/069b2340b227c27a4a4d9b739518843c/94948/paper_rain.jpg 960w,\n/static/069b2340b227c27a4a4d9b739518843c/45171/paper_rain.jpg 1920w",
                sizes: "(min-width: 1920px) 1920px, 100vw",
              },
              sources: [
                {
                  srcSet:
                    "/static/069b2340b227c27a4a4d9b739518843c/0d0b4/paper_rain.webp 480w,\n/static/069b2340b227c27a4a4d9b739518843c/a8e0b/paper_rain.webp 960w,\n/static/069b2340b227c27a4a4d9b739518843c/ddcb4/paper_rain.webp 1920w",
                  type: "image/webp",
                  sizes: "(min-width: 1920px) 1920px, 100vw",
                },
              ],
            },
            width: 1920,
            height: 1272,
          },
        },
      },
    },
  },
};

describe("Blog Post Page", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("renders correctly", () => {
    const blogPost = render(<BlogPost data={data} />).container;
    expect(blogPost).toBeInTheDocument();
    expect(blogPost).toHaveTextContent("Photo Credit:");
    expect(blogPost).toHaveTextContent(
      `Posted by ${data.mdx.frontmatter.author} on ${data.mdx.frontmatter.date}`
    );
    // OTHER TESTS HERE
  });
});
