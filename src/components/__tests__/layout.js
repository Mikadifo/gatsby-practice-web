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

import Layout from "../layout";

describe("Layout", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("renders correctly", () => {
    const layout = render(
      <Layout pageTitle="Layout Testing">Hello Test Layout</Layout>
    ).container;
    expect(layout).toBeInTheDocument();
    expect(layout).toHaveTextContent("First Gatsby Site");
    expect(layout).toHaveTextContent("Home");
    expect(layout).toHaveTextContent("About me");
    expect(layout).toHaveTextContent("Blog");
    expect(layout).toHaveTextContent("Layout Testing");
  });
});
