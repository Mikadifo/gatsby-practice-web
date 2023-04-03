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

import AboutPage from "../about";

describe("About me", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("renders correctly", () => {
    const aboutPage = render(<AboutPage />).container;
    expect(aboutPage).toBeInTheDocument();
    expect(aboutPage).toHaveTextContent("About Me");
    expect(aboutPage).toHaveTextContent(
      "Hey there! I'm the creator of this site. I'm learning Gatsby and"
    );
    const aboutIcon = aboutPage.getElementsByTagName("svg")[0];
    expect(aboutIcon).toBeInTheDocument();
    expect(aboutIcon).toHaveAttribute("height", "1em");
    expect(aboutIcon).toHaveAttribute("width", "1em");
  });
});
