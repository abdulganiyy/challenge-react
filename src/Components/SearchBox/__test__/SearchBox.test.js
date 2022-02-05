import React from "react";
import SearchBox from "../SearchBox";

import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders search box without crashing", () => {
  render(<SearchBox />);
});

it("matches screenshot", () => {
  let tree = renderer.create(<SearchBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
