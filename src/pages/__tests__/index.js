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

import IndexPage from "../index";

describe("Page Index", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("renders correctly", () => {
    const indexPage = render(<IndexPage />).container;
    expect(indexPage).toBeInTheDocument();
    expect(indexPage).toHaveTextContent(
      "Learning Gatsby to migrate my old personal website here."
    );
  });
});
