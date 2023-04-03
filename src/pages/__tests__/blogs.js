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

import BlogPage from "../blog";

const data = {
  allMdx: {
    nodes: [
      {
        frontmatter: {
          title: "Test Blog",
          date: "March 15, 2023",
          slug: "testing-post",
        },
        id: "a9efc355-e4b9-5d52-81a3-c220e19b5e51",
        excerpt:
          "This is a test post. Lol! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et…",
      },
      {
        frontmatter: {
          title: "Another Blog",
          date: "February 15, 2023",
          slug: "another-post",
        },
        id: "04d538c1-7e6e-52ec-9055-f7f72b2b6409",
        excerpt:
          "This is my just another blog. Boring! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…",
      },
      {
        frontmatter: {
          title: "Intro Post",
          date: "January 15, 2023",
          slug: "intro-post",
        },
        id: "9e1db2da-e0d9-50d1-adaf-d32430482bd5",
        excerpt:
          "This is my intro blog post! This is great. List of things I do:\n\nPetting dogs Eating Coding\n\nLorem ipsum dolor sit amet, consetetur…",
      },
    ],
  },
};

describe("Page Index", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("renders correctly", () => {
    const blogPage = render(<BlogPage data={data} />).container;
    expect(blogPage).toBeInTheDocument();
    //OTHER TESTS HERE
  });
});
